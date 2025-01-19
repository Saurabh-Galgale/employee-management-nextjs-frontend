// @ts-nocheck

import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";

const BasicDetails = ({
  formData,
  handleFormDataChange,
  setStepValid,
}: any) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateField = (field: string, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10}$/; // Example: 10 digits only
        if (!value.trim()) {
          error = "Phone number is required.";
        } else if (!phoneRegex.test(value)) {
          error = "Invalid phone number format. Enter 10 digits.";
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
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim();
    setStepValid(isValid);
  }, [errors, formData]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Name"
        color="secondary.main"
        value={formData.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("name", e.target.value)
        }
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        type="email"
        color="secondary.main"
        value={formData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("email", e.target.value)
        }
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        type="tel"
        color="secondary.main"
        value={formData.phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("phone", e.target.value)
        }
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </Box>
  );
};

export default BasicDetails;
