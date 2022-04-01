import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import {products} from '../../products-data'



export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow:1 ,padding:3}} >
      <Grid container spacing={2}>
       {
       products.map(product=>(
        <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3}>
      <Product product={product}  />
        </Grid>

       ))
       }
       
    
        </Grid>

   
    </Box>
  );
}
