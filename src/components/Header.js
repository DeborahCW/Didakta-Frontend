import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1c2128" }}>
      <AppBar sx={{ backgroundColor: "#1c2128" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img
                id="Logo"
                width="100"
                padding-top="10"
                src={logo}
                alt="Didakta Logo"
                style={{ paddingTop: "10px" }}
              />
            </Link>
          </Typography>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/register">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import {Route, Routes, Link} from "react-router-dom";

// const Header = () => {

//     return (
//         <>
//             <TopHeader>
//                 <NavBar>
//                     <Link to="/"><Logo src={logo}/></Link>
//                     <Link to="Login"><A>Login</A></Link>
//                     <Link to="Register"><A>Register</A></Link>
//                 </NavBar>
//             </TopHeader>
//         </>
//     )
// }

// export default Header
