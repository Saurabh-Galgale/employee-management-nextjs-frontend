"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { mockUsers } from "./mockUsers";

type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: string;
};

export default function Page() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

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

  const handleUpdate = (userId: string) => {
    alert(`Update user ${userId}`);
  };

  const addMockUsers = () => {
    let storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    let newUsersList = [...storedUsers, ...mockUsers];
    localStorage.setItem("users", JSON.stringify(newUsersList));
    setUsers(newUsersList);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when the rows per page change
  };

  const currentUsers = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ marginTop: 4, textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5">
          Welcome to the Employee Management System
        </Typography>
        <Box
          sx={{
            margin: {
              xs: "4px auto",
              sm: "0",
            },
          }}
        >
          <Link href={"/users"} passHref>
            <Button size="medium" sx={{ marginRight: 2 }}>
              Add User
            </Button>
          </Link>
          <Button size="medium" onClick={addMockUsers}>
            Add Dummy users
          </Button>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ marginY: 2 }} />
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px",
          width: "90%",
          maxWidth: "90%",
          maxHeight: "75vh",
          margin: "0 auto",
          borderRadius: "12px",
          backgroundColor: "secondary.main",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#D0DCE1" }}>
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
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
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
                      onClick={() => handleUpdate(user.id)}
                      sx={{ marginRight: "8px" }}
                    >
                      Edit
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
        <TablePagination
          rowsPerPageOptions={[8, 15, 30]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#D0DCE1",
          }}
        />
      </TableContainer>
    </Box>
  );
}
