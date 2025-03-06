import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed"> {/* Changed from "static" to "fixed" */}
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Movie World!
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign Up</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/addmovies" style={{ color: "white", textDecoration: "none" }}>Add Movie</Link>
          </Button>
          <Button color="inherit">
            <Link to="/list" style={{ color: "white", textDecoration: "none" }}>Movies</Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* This div ensures content doesn't get hidden behind the fixed navbar */}
      <Box sx={{ mt: 8 }}></Box>
    </>
  );
};

export default Navbar;