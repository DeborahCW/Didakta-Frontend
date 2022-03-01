import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Login from "../pages/Login";
import logo from "../images/icon-red.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';


function Copyright(props) {
  return (
    <Typography variant="body2" color="#fffde7" align="center" {...props}>
      {"Copyright © "}
      <Link color="#fffde7" textDecoration="none" fontWeight="bold" href="/">
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
        sx={{ backgroundColor: "#78909c" }}
        color="#fffde7"
        display="flex"
        
      >
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
              <Container 
                maxWidth="lg" 
                direction="row"
                display="flex"
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateRows="repeat(4, 1fr)"
                gap={2}
              >
          <Grid 
            container 
            spacing={2}
            direction="row"
            jusitfy="center">
            <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            fontWeight="bold"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="row">Home</Grid>
             <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            fontWeight="bold"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="row">Library</Grid>
             <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="column">Contact</Grid>
             <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="column">Login</Grid>
 <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="row">About</Grid>
           <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="column">Dashboard</Grid>
             <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="column">FAQs</Grid>
             <Grid item component={Link} to="/"
            color="#fffde7"
            textDecoration="none"
            xs={12} 
            sm={4} 
            marginLeft="5em" 
            direction="column">Wordlist</Grid>
              
              <Grid item 
              component={"a"} 
              href="www.gmail.com"
              >
                <img src="{email}" 
                height={"4em"}
                 />
              </Grid>
              <Grid item component={"a"} 
              href="www.github.com"
              >
                <img  src="{gitHub}"
               
                />
              </Grid>
              <Grid item component={"a"} 
              href="www.telegram.com"
              >
                <img  src="{telegram}"/>
              </Grid>
              <Grid item component={"a"} 
              href="www.twitter.com"
              >
                <img  src="{twitter}"/>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              {/* DIDAKTA &reg; {new Date().getFullYear()} */}
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>
         
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
