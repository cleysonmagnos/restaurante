import * as React from 'react';
import {ThemeProvider, createTheme } from '@mui/material/';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container'
import Lista from "./components/Lista";
// Alertinha insano
import Snackbar from './utils/Snack';
import './index.css';


function App() {
    const theme = createTheme({
    palette: {
      primary: {
        main: '#732002',
      },
      secondary: {
        main: '##1A2426',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Restaurante
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <AccountCircle sx={{ fontSize: 40 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Listagem de Mesas */}
      <Snackbar />
      <Container maxWidth="xl" style={{padding: 30, backgroundColor: 'white'}} >
          <Lista />
      </Container>
       
    </ThemeProvider>
  );
}

export default App;
