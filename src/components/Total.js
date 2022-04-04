import React from 'react'
import { accounting  } from 'accounting'
import {Button} from '@mui/material'
import { getCantidadCart, getCartTotalPrice } from '../reducers/shoppingReducer'
import { useDispatch, useSelector } from 'react-redux';

/* import { makeStyles } from '@mui/styles';
 */
/* const theme = createTheme();

const useStyles= makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alingItems:"center",
        height:"20vh"
    },
    button:{
        marginTop:"2rem"
    }
})) */
const Total = () => {
/*     const classes=useStyles();
 */
       const state= useSelector(state=> state)

       let {cart}= state.shopping;
       console.log("🚀 ~ file: Total.js ~ line 29 ~ Total ~ cart", cart)
return (
   
    <div className="total" >
    <h5>Total items:  {getCantidadCart(cart) || 0 } </h5>
   <h5> {accounting.formatMoney(getCartTotalPrice(cart)
)}</h5>
      <Button  variant="contained"  color='secondary'>Ckeck out </Button>
    </div>
  )
}

export default Total