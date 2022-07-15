import React from "react";
import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div >
      <AppBar position="static">
        <Toolbar sx={{gap: 3}}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("/adduser")}>
            AddUser
          </Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
