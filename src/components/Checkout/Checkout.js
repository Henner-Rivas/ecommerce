import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckoutCard from "./CheckoutCard";
import { Typography } from "@mui/material";
import Total from "../Total";

import { useDispatch, useSelector } from "react-redux";
import { delFromCart } from "../../actions/ShoppinCartActions";
import { addTocart } from "../../actions/ShoppinCartActions";

export default function Checkout() {
  const state = useSelector((state) => state);
  let { cart } = state.shopping;

  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        background: "#ccc",
        margin: 4,
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            Shopping Cart
          </Typography>
        </Grid>

        {cart.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CheckoutCard
              product={product}
              key={product.id}
              deleteOne={() => dispatch(delFromCart(product.id))}
              addToOtherCart={() => dispatch(addTocart(product.id))}
              deleteAll={() => dispatch(delFromCart(product.id, true))}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={3}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          borderTop: "4px solid black",
          marginTop: "15px",
        }}
      >
        <Typography align="center" variant="h4">
          <Total />
        </Typography>
      </Grid>
    </Box>
  );
}
