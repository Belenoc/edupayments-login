import { AppBarContainer, NavItem, StyledToolbar, TalkButton } from "./NavbarStyles";
import { Drawer, IconButton, List, ListItem, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

import Logo from "../shared/logo";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Solutions', path: '/solutions' },
  { title: 'Features', path: '/features' },
  { title: 'We', path: '/we' },
  { title: 'Persons', path: '/persons' },
  { title: 'Rates', path: '/rates' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <List style={{ margin: '0 10px' }}>
        {navLinks.map((link) => (
          <ListItem key={link.title} component="a" href={link.path}>
            {link.title}
          </ListItem>
        ))}
        <TalkButton href="/talk" variant="contained">let's Talk</TalkButton>
      </List>
    </div>
  );

  return (
    <AppBarContainer color="default" elevation={0}>
      <StyledToolbar>
        <Logo
          width={isMobile ? "250" : "350"}
          height={isMobile ? "75" : "100"}
          fillColor="blue"
        />
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={2} alignItems="center">
            {navLinks.map((link) => (
              <NavItem key={link.title} href={link.path}>
                {link.title}
              </NavItem>
            ))}
            <TalkButton href="/talk" variant="contained">let's Talk</TalkButton>
          </Stack>
        )}
      </StyledToolbar>
    </AppBarContainer>
  );
};

export default Navbar;