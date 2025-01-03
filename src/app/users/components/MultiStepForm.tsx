"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import BasicDetails from "./steps/BasicDetails";
import JobDetails from "./steps/JobDetails";
import Review from "./steps/Review";

type FormDataType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: string;
};

const steps = ["Basic Details", "Job Details", "Review & Submit"];

const MultiStepForm = ({ prefillData }: { prefillData?: FormDataType }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>(
    prefillData || {
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
    }
  );

  const generateUniqueId = (existingIds: string[]): string => {
    let newId: string;
    do {
      newId = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    } while (existingIds.includes(newId));
    return newId;
  };

  const saveUserToLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    let existingUserIndex = -1;

    if (formData.id) {
      existingUserIndex = users.findIndex(
        (user: FormDataType) => user.id === formData.id
      );
    }

    if (existingUserIndex !== -1) {
      users[existingUserIndex] = { ...formData };
      alert("User updated successfully!");
    } else {
      const existingIds = users.map((user: FormDataType) => user.id);
      const uniqueId = generateUniqueId(existingIds);
      const userWithId = { ...formData, id: uniqueId };
      users.unshift(userWithId);
      alert("User saved successfully!");
    }

    // Save the updated user data back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Reset the form data and set the active step to 0
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
    });
    setActiveStep(0);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      saveUserToLocalStorage();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleFormDataChange = (key: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  useEffect(() => {
    if (prefillData) {
      setFormData(prefillData);
    }
  }, [prefillData]);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <BasicDetails
            formData={formData}
            handleFormDataChange={handleFormDataChange}
          />
        );
      case 1:
        return (
          <JobDetails
            formData={formData}
            handleFormDataChange={handleFormDataChange}
          />
        );
      case 2:
        return <Review formData={formData} />;
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 4 }}>
        {renderStepContent()}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            color="primary"
            onClick={handleNext}
            disabled={
              activeStep === steps.length - 1 &&
              ![
                "name",
                "email",
                "phone",
                "department",
                "designation",
                "salary",
              ].every((key) => formData[key as keyof FormDataType])
            }
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MultiStepForm;
