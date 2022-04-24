import React from 'react'
import { accounting  } from 'accounting'
import {Button} from '@mui/material'
import { getCantidadCart, getCartTotalPrice } from '../reducers/shoppingReducer'
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Total = () => {

       const state= useSelector(state=> state)

       let {cart}= state.shopping;
return (
   
    <div className="total" >
    <h5>Total items:  {getCantidadCart(cart) || 0 } </h5>
   <h5> {accounting.formatMoney(getCartTotalPrice(cart)
)}</h5>
      <Link to='/checkout-page'>
      <Button  variant="contained"  color='secondary'>Ckeck out </Button>
      
      </Link>
    </div>
  )
}

export default Total