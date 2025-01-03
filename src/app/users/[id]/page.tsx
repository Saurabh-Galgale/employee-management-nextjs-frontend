"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import MultiStepForm from "../components/MultiStepForm";

export default function EditUserPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(props.params);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user: { id: string }) => user.id === id);

    if (user) {
      setUserData(user);
    } else {
      alert("User not found!");
    }
  }, [id]);

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
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
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            height: "50px",
          }}
        >
          {/* Back Arrow */}
          <Link href="/" passHref>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <ArrowBack />
            </IconButton>
          </Link>

          {/* Centered Title */}
          <Typography
            variant="h4"
            sx={{
              margin: "0 auto", // Center-align the text
            }}
          >
            Edit User Details
          </Typography>
        </Box>
        <MultiStepForm prefillData={userData} />
      </Box>
    </Box>
  );
}
