import React from "react";
import { Box, TextField } from "@mui/material";

const JobDetails = ({ formData, handleFormDataChange }: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Department"
        value={formData.department}
        onChange={(e) => handleFormDataChange("department", e.target.value)}
      />
      <TextField
        label="Designation"
        value={formData.designation}
        onChange={(e) => handleFormDataChange("designation", e.target.value)}
      />
      <TextField
        label="Salary"
        type="number"
        value={formData.salary}
        onChange={(e) => handleFormDataChange("salary", e.target.value)}
      />
    </Box>
  );
};

export default JobDetails;
