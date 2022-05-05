import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import { PowerSettingsNew } from "@mui/icons-material";

import logo from "../../assets/clinica-logo.png";
import { useAuth } from "../../hooks/useAuth";

const pages = [
  { link: "Agendar cita", nav: "services" },
  { link: "Mis citas", nav: "appointments" },
  { link: "Mi perfil", nav: "profile" },
];
const settings = [ "Salir"];

const Navbar = () => {

  const { logout } = useAuth()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const loggingOut = () => {
    logout()
    window.location.reload();
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#cb5edb" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            p={1}
            my={1}
            mr={2}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              backgroundColor: "white",
              borderRadius: "40%",
            }}
          >
            <img src={logo} alt="Logo de la clínica" height="60px" />
          </Box>

          {/* mobile hamburger menu*/}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.link}
                  component={Link}
                  to={`/dashboard/${page.nav}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center" variant="h6">
                    {page.link}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* mobile logo */}
          <Box
            my={1}
            sx={{ display: { xs: "flex", md: "none" }, width: "80%" }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "40%",
                marginX: "auto",
              }}
            >
              <img src={logo} alt="Logo de la clínica" height="60px" />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={`/dashboard/${page.nav}`}
                key={page.link}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                }}
                size="large"
              >
                {page.link}
                {/* <Typography textAlign="center" color="white">
                  <Link to={`/dashboard/${page.nav}`}>{page.link}</Link>
                </Typography> */}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <PowerSettingsNew
                sx={{ fontSize: { xs: 25, md: 35 }, color: "action" }}
              />
            </IconButton>
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
                <MenuItem key={setting} onClick={loggingOut}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
