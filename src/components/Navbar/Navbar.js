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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCantidadCart} from '../../reducers/shoppingReducer'
export default function Navbar() {

    const state= useSelector(state=> state)
      let {cart}= state.shopping;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to='/' >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              
         <ImgLogo src={logo} alt="" />
           </IconButton>
          
          </Link>

          <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1 }}>
            Hello user
          </Typography>
          <Link to='/singin'>
            <div>
          <Button variant="outlined" >
            <strong>Sing  in</strong>
          </Button>
            </div>
          
          </Link>
  
<Link to="/checkout">

<IconButton aria-label='show cart-items' color="primary">
           <Badge badgeContent={  getCantidadCart(cart)   } color="secondary">
            <ShoppingCart  />
           </Badge>
            
              </IconButton >

</Link>
   

        </Toolbar>
      </AppBar>
    </Box>
  );
}
