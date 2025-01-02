import React from "react";
import { Box, Typography } from "@mui/material";

const Review = ({ formData }: any) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Review Your Details
      </Typography>
      <Typography>Name: {formData.name}</Typography>
      <Typography>Email: {formData.email}</Typography>
      <Typography>Phone: {formData.phone}</Typography>
      <Typography>Department: {formData.department}</Typography>
      <Typography>Designation: {formData.designation}</Typography>
      <Typography>Salary: {formData.salary}</Typography>
    </Box>
  );
};

export default Review;
