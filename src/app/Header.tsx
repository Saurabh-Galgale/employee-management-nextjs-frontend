"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ProfileFormModal from "./ProfileFormModal";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const pages = [
  { route: "users", translation: "Add New User" },
  { route: "about-project", translation: "About Project" },
  { route: "about", translation: "About Me" },
];
const settings = ["Profile"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState("/userAvatar01.png");

  const favoriteUsersStore = useSelector((state: RootState) => state.favorite);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenProfileModal = () => {
    setIsModalOpen(true);
    handleCloseUserMenu();
  };

  const handleCloseProfileModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "secondary.main" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  style={{ marginRight: 8 }}
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Link href={`/${page.route}`} passHref>
                      <Typography sx={{ textAlign: "center" }}>
                        {page.translation}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                mr: 3,
              }}
            >
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              </Link>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EMS
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                ml: 3,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.route} href={`/${page.route}`} passHref>
                  <Typography
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                      display: "block",
                      mr: 3,
                    }}
                  >
                    {page.translation}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="This shows total number of Bookmarked users">
                <IconButton sx={{ p: 0, mr: 3 }}>
                  <Badge
                    badgeContent={favoriteUsersStore.count}
                    color="primary"
                  >
                    {favoriteUsersStore.count ? (
                      <BookmarksIcon />
                    ) : (
                      <BookmarksOutlinedIcon />
                    )}
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={userAvatar} sx={{ width: 40, height: 40 }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleOpenProfileModal}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ProfileFormModal
        open={isModalOpen}
        onClose={handleCloseProfileModal}
        setUserAvatar={setUserAvatar}
      />
    </>
  );
}
export default Header;
