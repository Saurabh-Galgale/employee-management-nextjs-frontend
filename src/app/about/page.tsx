import React from "react";
import { Typography, Box } from "@mui/material";

const page = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "full",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            width: "85%",
            maxWidth: "85%",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "secondary.main",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Hi, I'm Saurabh Galgale.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default page;
