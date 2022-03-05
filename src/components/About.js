import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import logo from "../images/icon-red.png";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import "../styles/mui_styles.css";
import "../styles/home.css";

export default function About() {
  return (
    <Container
      className="MuiContainer-root-MuiContainer-maxWidthSm-css-kae4yu-MuiContainer-root"
      component="main"
      sx={{ mt: 8, mb: 2, pl: 1 }}
      maxWidth="sm"
      justifyContent="center"
    >
      {/* <Card sx={{ pl:5, pr: 5, pt:5, pb:-10 }} bgColor="#eceff1" >  */}
      <Link to="/register">
        <img
          id="Logo"
          width="100"
          padding-top="5"
          src={logo}
          alt="Didakta Logo"
          style={{ pt: "10px", mt: "20px", pl: 8 }}
        />
      </Link>

      {/* <Typography variant="body1" justifyContent="center" marginTop="50px"></Typography> */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        justifyContent="center"
      >
        About DIDAKTA
      </Typography>
      <Typography
        className="MuiTypography-root-MuiTypography-h5-MuiTypography-gutterBottom-css-xwdu4f-MuiTypography-root"
        variant="h6"
        component="h2"
        gutterBottom
        justifyContent="center"
      >
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      </Typography>
      {/* <Typography variant="body1" justifyContent="center" sx={{ pl: 23 }}>Click to register or login.</Typography> */}

      {/* <Box backgroundColor="#eceff1">   */}

      {/* </Card> */}
      {/* </Box> */}
    </Container>
  );
}
