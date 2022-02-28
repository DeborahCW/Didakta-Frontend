import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Login from "../pages/Login";
import logo from "../images/logo.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        DIDAKTA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        sx={{ backgroundColor: "#000000" }}
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}></Grid>

            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                About
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                FAQ
              </Link>
            </Box>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              {/* DIDAKTA &reg; {new Date().getFullYear()} */}
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
