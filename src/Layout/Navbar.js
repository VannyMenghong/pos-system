import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense"
        style={{display: 'flex', justifyContent:'end'}}
        >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}  style={{ outline:'none' }}>
            <KeyIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}