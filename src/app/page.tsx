"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type UserType = {
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: string;
};

export default function Page() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleDelete = (index: number) => {
    if (
      confirm("Are you sure, you want to delete the user permanently?") == true
    ) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const handleUpdate = (index: number) => {
    alert(`Update user at index: ${index}`);
  };

  return (
    <Box sx={{ marginTop: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Employee Management System
      </Typography>
      <Divider variant="middle" sx={{ marginY: 4 }} />
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px",
          width: "85%",
          maxWidth: "90%",
          margin: "0 auto",
          backgroundColor: "secondary.main",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Department</strong>
              </TableCell>
              <TableCell>
                <strong>Designation</strong>
              </TableCell>
              <TableCell>
                <strong>Salary</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.designation}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      onClick={() => handleUpdate(index)}
                      sx={{ marginRight: "8px" }}
                    >
                      Update
                    </Button>
                    <IconButton onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No users available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
