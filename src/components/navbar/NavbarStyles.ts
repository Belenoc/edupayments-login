// src/components/Navbar/NavbarStyles.ts

import { AppBar, Button, Link, Toolbar, styled } from "@mui/material";

export const AppBarContainer = styled(AppBar)({
  background: "white",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  padding: "25px 50px",
  zIndex: 100,
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  ".MuiLink-root": {
    margin: "0 30px",
  },
});

export const NavItem = styled(Link)({
  color: "#000",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "semi-bold",
  marginRight: "20px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#555",
  },
});

export const TalkButton = styled(Button)({
  background: "#46BA7C",
  color: "white",
  borderRadius: "20px",
  textTransform: "none",
  padding: "10px 30px",
  boxShadow: "none",
  alignSelf: "center",
  "&:hover": {
    background: "#00796B",
  },
});
