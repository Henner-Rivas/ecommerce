import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo3.jpg'
import { ImgLogo } from './styles';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
export default function Navbar() {

    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              
         <ImgLogo src={logo} alt="" />
           </IconButton>
          <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1 }}>
            Hello user
          </Typography>
            <div>
          <Button variant="outlined" >
            <strong>Sing  in</strong>
          </Button>
            </div>
 

          <IconButton aria-label='show cart-items' color="primary">
           <Badge badgeContent={2} color="secondary">
            <ShoppingCart  />
           </Badge>
            
              </IconButton >

        </Toolbar>
      </AppBar>
    </Box>
  );
}
