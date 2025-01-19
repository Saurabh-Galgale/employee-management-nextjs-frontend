// @ts-nocheck

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface ProfileFormModalProps {
  open: boolean;
  onClose: () => void;
  setUserAvatar: Dispatch<SetStateAction<string>>;
}

const ProfileFormModal: React.FC<ProfileFormModalProps> = ({
  open,
  onClose,
  setUserAvatar,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("/userAvatar01.png");

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setName(profile.name || "");
      setEmail(profile.email || "");
      setAvatar(profile.avatar || "/userAvatar01.png");
      setUserAvatar(profile.avatar || "/userAvatar01.png");
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setUserAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const profileData = { name, email, avatar };
    localStorage.setItem("profile", JSON.stringify(profileData));
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: {
            xs: "95%",
            sm: "80%",
            lg: "50%",
          },
          borderRadius: "12px",
          backgroundColor: "secondary.main",
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Edit Profile</span>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar} sx={{ width: 100, height: 100, mb: 2 }} />
          <Button
            variant="outlined"
            component="label"
            color="secondary.dark"
            sx={{ backgroundColor: "secondary.main", color: "secondary.dark" }}
          >
            Upload Avatar
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
          <TextField
            label="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            fullWidth
            sx={{ mt: 2 }}
            color="secondary.dark"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            fullWidth
            sx={{ mt: 2 }}
            color="secondary.dark"
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 18px 8px 18px",
        }}
      >
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileFormModal;
