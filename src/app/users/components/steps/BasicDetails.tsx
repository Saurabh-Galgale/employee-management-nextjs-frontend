import React from "react";
import { Box, TextField } from "@mui/material";

const BasicDetails = ({ formData, handleFormDataChange }: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Name"
        value={formData.name}
        onChange={(e) => handleFormDataChange("name", e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleFormDataChange("email", e.target.value)}
      />
      <TextField
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleFormDataChange("phone", e.target.value)}
      />
    </Box>
  );
};

export default BasicDetails;
