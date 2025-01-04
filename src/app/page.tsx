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
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { mockUsers } from "./mockUsers";

type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: string;
  favorite: boolean;
};

export default function Page() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const addMockUsers = () => {
    let storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    let mapStoredUsers = new Map();
    storedUsers &&
      storedUsers.forEach((user: UserType) => {
        mapStoredUsers.set(user.id, user.name);
      });
    let newUsersList = mockUsers.filter((user) => {
      if (!mapStoredUsers.get(user.id)) return user;
    });
    let updatedUsersList = [...newUsersList, ...storedUsers];
    localStorage.setItem("users", JSON.stringify(updatedUsersList));
    setUsers(updatedUsersList);
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentUsers = filteredUsers.slice(
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
        <Typography variant="h5" color="secondary.dark">
          Welcome to the Employee Management System
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: {
              xs: "4px auto",
              sm: "0",
            },
          }}
        >
          <TextField
            label="Search user by name"
            variant="outlined"
            color="secondary.dark"
            value={searchQuery}
            size="small"
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              marginRight: 2,
              width: {
                xs: "15rem",
                lg: "20rem",
              },
            }}
          />
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
                <strong>Favorite</strong>
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
                  <TableCell>
                    {user.favorite ? (
                      <IconButton>
                        <BookmarkOutlinedIcon />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <BookmarkBorderOutlinedIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.designation}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>
                    <Link href={`/users/${user.id}`}>
                      <Button size="small" sx={{ marginRight: "8px" }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="outlined"
                      size="small"
                      color="secondary.dark"
                      sx={{
                        backgroundColor: "secondary.main",
                        color: "secondary.dark",
                      }}
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                    {/* <IconButton
                      onClick={() => handleDelete(index)}
                      color="primary.main"
                    >
                      <DeleteIcon />
                    </IconButton> */}
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
