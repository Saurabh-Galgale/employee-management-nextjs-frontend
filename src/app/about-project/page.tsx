import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "90vh",
          maxHeight: "fit content",
          width: "full",
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            width: "90%",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "secondary.main",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              color: "text.primary",
            }}
          >
            About the Employee Management System
          </Typography>

          <Divider sx={{ margin: "20px 0" }} />

          <Typography variant="body1" sx={{ marginBottom: "16px" }}>
            Welcome to the Employee Management System! This project is designed
            to streamline the process of managing employees by offering an
            intuitive multi-step form for adding new users and a responsive
            table to display employee data using NEXT.JS. This system showcases
            modern UI/UX design and efficient data handling.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", color: "text.primary" }}
          >
            Key Features
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Multi-Step Form: Add employee details step by step.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Landing Page: Displays all employees in an organized table.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Responsive Design: Optimized for all devices.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Validation: Real-time form validation to ensure data integrity.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Modern UI/UX: Intuitive and visually appealing design.
          </Typography>

          <Divider sx={{ margin: "20px 0" }} />

          <Typography variant="body1" sx={{ marginTop: "16px" }}>
            This Employee Management System is a testament to building scalable
            and efficient web applications, ensuring ease of use for managing
            employee data effectively. Explore the system to see these features
            in action!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
