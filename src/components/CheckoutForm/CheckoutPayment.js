import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button, CircularProgress } from '@mui/material';
import { getCartTotalPrice } from '../../reducers/shoppingReducer';
import {  useSelector ,useDispatch} from "react-redux";
import { accounting  } from 'accounting'
import  axios from 'axios'
import { setPaymentMessage } from '../../actions/ShoppinCartActions';
import {useState} from 'react'
const CheckoutPayment = ({handleNext,handleBack}) => {
    const state = useSelector((state) => state);
    const dispatch= useDispatch()
  let { cart } = state.shopping;

    const ELEMENT_OPTIONS = {
        iconStyle: "solid",
        hidePostalCode: true,
        style: {
          base: {
            border: '2px solid red',//TRIED THIS**************************
            iconColor: "rgb(240, 57, 122)",
            color: "rgb(240, 57, 122)",
            fontSize: "16px",
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            }
          },
          invalid: {
            color: "#e5424d",
            ":focus": {
              color: "#303238"
            }
          }
        }
      };
      const [loading, setloading] = useState(false);

const stripe= useStripe();
const elements= useElements();
    const handleSubmit =async (e)=> {
     e.preventDefault();
     const {error,paymentMethod} = await stripe.createPaymentMethod({
       type:"card",
       card:elements.getElement(CardElement)
      })
   setloading(true)
      if(!error){
try {
  
  const {id}= paymentMethod;
  const { data} =  await axios.post("http://localhost:3001/api/checkout",{
       id,
       amount:getCartTotalPrice(cart) *100 
     })
  console.log("🚀 ~ file: CheckoutPayment.js ~ line 50 ~ handleSubmit ~ data", data)
   dispatch(setPaymentMessage(data.message))
    elements.getElement(CardElement).clear()

    handleNext()
} catch (error) {
  console.log(error)
}
setloading(false)
  }
      }

    return (
    <form>

        <CardElement options={ELEMENT_OPTIONS} />
<div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}> 
       <Button variant='outlined' onClick={handleBack} >Back</Button>
     <Button disabled={!stripe} variant='contained' onClick={handleSubmit} > 
     {

       loading ?
        (<CircularProgress/>) 
        :
        ( `pay ${accounting.formatMoney(getCartTotalPrice(cart))}`) 
       
     }
       
       </Button>

</div>
    </form>
  )
}

export default CheckoutPayment