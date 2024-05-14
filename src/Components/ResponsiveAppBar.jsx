import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CountryFlag from "react-country-flag";

const languages = [
  { code: "en", label: "English", country: "US" },
  { code: "fr", label: "French", country: "FR" },
  { code: "es", label: "Spanish", country: "ES" },
  { code: "de", label: "German", country: "DE" },
  { code: "it", label: "Italian", country: "IT" },
];

const pages = [
  { label: "About Us", path: "/about-us" },
  { label: "Breed", path: "/breed" },
  { label: "Future Litters", path: "/puppies" },
  { label: "Contact Us", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
  { label: "Parent Dogs", path: "/parent-dogs" },
  { label: "Resources", path: "/resources" },
  { label: "News", path: "/news" },
];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleLanguageMenuClick = (event) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    handleLanguageMenuClose();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem button key={page.label} component={Link} to={page.path}>
            <ListItemText primary={page.label} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLanguageMenuClick}>
          <CountryFlag
            countryCode={currentLanguage.country}
            svg
            style={{ width: "20px", height: "auto" }}
          />
          <ListItemText primary={currentLanguage.label} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#212529" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexGrow: 0,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" }, // Centers the logo on xs and aligns to start on sm and above
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 2,
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexGrow: 1,
                  justifyContent: "flex-end",
                }}
              >
                {pages.slice(0, 4).map((page) => (
                  <Button
                    key={page.label}
                    sx={{ color: "white" }}
                    component={Link}
                    to={page.path}
                  >
                    {page.label}
                  </Button>
                ))}
                <Button sx={{ color: "white" }} onClick={handleMenuClick}>
                  More <ArrowDropDownIcon />
                </Button>
                <Menu
                  anchorEl={menuAnchorEl}
                  keepMounted
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                >
                  {pages.slice(4).map((page) => (
                    <MenuItem
                      key={page.label}
                      onClick={handleMenuClose}
                      component={Link}
                      to={page.path}
                    >
                      {page.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button sx={{ color: "white" }} onClick={handleLanguageMenuClick}>
                <CountryFlag
                  countryCode={currentLanguage.country}
                  svg
                  style={{ width: "20px", height: "auto" }}
                />
                {currentLanguage.label} <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={languageMenuAnchorEl}
                keepMounted
                open={Boolean(languageMenuAnchorEl)}
                onClose={handleLanguageMenuClose}
              >
                {languages
                  .filter((lang) => lang.code !== currentLanguage.code)
                  .map((language) => (
                    <MenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                    >
                      <CountryFlag
                        countryCode={language.country}
                        svg
                        style={{ width: "20px", height: "auto" }}
                      />
                      {language.label}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveAppBar;
