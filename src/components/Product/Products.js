import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import {addTocart} from '../../actions/ShoppinCartActions'

export default function Products() {
  const state= useSelector(state=> state)
    const dispatch= useDispatch()
    let {products,cart}= state.shopping;
  return (
    <Box sx={{ flexGrow:1 ,padding:3}} >
      <Grid container spacing={2}>
       {
       products.map(product=>(
        <Grid  item xs={12} sm={6} md={4} lg={3}>
      <Product product={product} 

       addToCarts={()=> dispatch(addTocart(product.id))} key={product.id}  />
        </Grid>
       ))
       }  
        </Grid>

   
    </Box>
  );
}
