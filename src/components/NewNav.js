import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./NewNave.css";

export default function NavbarComponent() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" className="logo" sx={{ flexGrow: 1 }}>
          <img src="./logo.png" alt="Logo" className="logo-img" />
        </Typography>
        <div className="desktop-menu">
        <ScrollLink to="Pricing" smooth={true} duration={500} className="nav-link">
           <Button color="inherit" component={Link} to="/" className="nav-link">Pricing</Button>   </ScrollLink>
          <ScrollLink to="product" smooth={true} duration={500} className="nav-link">
            <Button color="inherit">Products</Button>
          </ScrollLink>
          <ScrollLink to="contactus" smooth={true} duration={500} className="nav-link">
             <Button color="inherit"  className="nav-link">Contact Us</Button></ScrollLink> 
          <Button variant="outlined" component={Link} to="/login" className="login-button">Login</Button>
          <Button variant="contained" color="primary" component={Link} to="/register" className="join-button">Join</Button>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen} className="mobile-menu-button">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
         <ScrollLink to="Pricing" smooth={true} duration={500} className="nav-link">
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Pricing</MenuItem> </ScrollLink>
          <ScrollLink to="product" smooth={true} duration={500} className="nav-link">
             <MenuItem onClick={handleMenuClose}>
              Products
          </MenuItem>   </ScrollLink>
          <ScrollLink to="contactus" smooth={true} duration={500} className="nav-link">
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact Us</MenuItem></ScrollLink>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/register">Join</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
