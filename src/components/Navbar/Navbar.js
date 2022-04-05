import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo3.jpg";
import { ImgLogo } from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCantidadCart } from "../../reducers/shoppingReducer";
import { logout } from "../../firebase/firebase";
import {clearCard} from "../../actions/ShoppinCartActions"

export default function Navbar() {
  const state = useSelector((state) => state);
  const navigate= useNavigate()
  let { cart } = state.shopping;
  let { user } = state.shopping;
  console.log("🚀 ~ file: Navbar.js ~ line 20 ~ Navbar ~ user", user);
    const dispatch= useDispatch();

  function handleSingOut(e) {
    e.preventDefault();
    navigate('/signin')
    logout();
    dispatch(clearCard(
         
    ) )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
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

          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ flexGrow: 1 }}
          >
            Hello {user.displayName}
          </Typography>

          { user.length === 0 ?
            <Link to="/signin">
              <div>
                <Button variant="outlined" >
                  <strong> Sign in</strong>
                </Button>
              </div>
            </Link>

            :
            <div>
              <Button variant="outlined" onClick={handleSingOut}>
                <strong>Sign  out</strong>
              </Button>
            </div>
          }
    

          <Link to="/checkout">
            <IconButton aria-label="show cart-items" color="primary">
              <Badge badgeContent={getCantidadCart(cart)} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
