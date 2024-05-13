import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu"; // Import Menu component
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem component
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FlagIcon } from "react-flag-icon-css"; // Import FlagIcon from react-flag-icon-css
import CountryFlag from "react-country-flag"; // Import CountryFlag from react-country-flag

const languages = [
  { code: "en", label: "English", country: "US" }, // Example: US flag for English
  { code: "fr", label: "French", country: "FR" }, // Example: FR flag for French
  { code: "es", label: "Spanish", country: "ES" }, // Example: ES flag for Spanish
  { code: "de", label: "German", country: "DE" }, // Example: DE flag for German
  { code: "it", label: "Italian", country: "IT" }, // Example: IT flag for Italian
  // Add more languages as needed
];

const pages = [
  { label: "About Us", path: "/about-us" },
  { label: "Breed", path: "/breed" },
  { label: "Future Litters", path: "/puppies" },
  { label: "Contact Us", path: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElMenu, setAnchorElMenu] = React.useState(null); // Define state for main menu
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null); // Define state for language dropdown
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleMenuOpen = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElMenu(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorElLanguage(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#212529" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {pages.map((page) => (
            <Button
              key={page.label}
              component={Link}
              to={page.path}
              sx={{ mx: 1, color: "inherit" }}
            >
              {page.label}
            </Button>
          ))}

          {/* Main menu */}
          <Box sx={{ position: "relative" }}>
            <Button
              aria-controls={anchorElMenu ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              sx={{
                mx: 1,
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              More
              <ArrowDropDownIcon />
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElMenu}
              open={Boolean(anchorElMenu)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {/* Main menu items */}
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/gallery"
              >
                Gallery
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/parent-dogs"
              >
                Parent Dogs
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/resources"
              >
                Resources
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/news">
                News
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {/* Language selection */}
          <Box sx={{ position: "relative" }}>
            <Button
              aria-controls={anchorElLanguage ? "menu-language" : undefined}
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              color="inherit"
              sx={{
                mx: 1,
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CountryFlag
                countryCode={currentLanguage.country}
                svg
                style={{ width: "30px", height: "auto", borderRadius: "50%" }}
              />
              <Typography sx={{ ml: 1 }}>{currentLanguage.label}</Typography>
              <ArrowDropDownIcon />
            </Button>

            <Menu
              id="menu-language"
              anchorEl={anchorElLanguage}
              open={Boolean(anchorElLanguage)}
              onClose={handleLanguageMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* Language menu items */}
              {languages
                .filter((language) => language.code !== currentLanguage.code) // Filter out the current language
                .map((language) => (
                  <MenuItem
                    key={language.code}
                    onClick={() => {
                      setCurrentLanguage(language);
                      handleLanguageMenuClose(); // Close the language dropdown after selection
                    }}
                  >
                    <CountryFlag
                      countryCode={language.country}
                      svg
                      style={{
                        width: "30px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography sx={{ ml: 1 }}>{language.label}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
