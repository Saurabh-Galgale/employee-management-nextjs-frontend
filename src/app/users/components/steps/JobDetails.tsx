import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";

const JobDetails = ({ formData, handleFormDataChange, setStepValid }: any) => {
  const [errors, setErrors] = useState({
    department: "",
    designation: "",
    salary: "",
  });

  const validateField = (field: string, value: string) => {
    let error = "";

    switch (field) {
      case "department":
        if (!value.trim()) {
          error = "Department is required.";
        }
        break;
      case "designation":
        if (!value.trim()) {
          error = "Designation is required.";
        }
        break;
      case "salary":
        if (!value.trim()) {
          error = "Salary is required.";
        } else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
          error = "Enter a valid number for salary.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    handleFormDataChange(field, value);
    validateField(field, value);
  };

  useEffect(() => {
    const isValid =
      Object.values(errors).every((err) => err === "") &&
      formData.department.trim() &&
      formData.designation.trim() &&
      formData.salary.trim();
    setStepValid(isValid);
  }, [errors, formData]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Department"
        color="secondary.main"
        value={formData.department}
        onChange={(e) => handleChange("department", e.target.value)}
        error={!!errors.department}
        helperText={errors.department}
      />
      <TextField
        label="Designation"
        color="secondary.main"
        value={formData.designation}
        onChange={(e) => handleChange("designation", e.target.value)}
        error={!!errors.designation}
        helperText={errors.designation}
      />
      <TextField
        label="Salary"
        type="text"
        color="secondary.main"
        value={formData.salary}
        onChange={(e) => handleChange("salary", e.target.value)}
        error={!!errors.salary}
        helperText={errors.salary}
      />
    </Box>
  );
};

export default JobDetails;
