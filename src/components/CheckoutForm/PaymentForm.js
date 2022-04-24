import { Divider, Typography } from '@mui/material'
import React from 'react'
import Review from './Review'
import { Elements,CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
import CheckoutPayment from './CheckoutPayment'
import { accounting  } from 'accounting'

const spripePromise= loadStripe("pk_test_51Jdbx8Kp0nVpO7XBEsOntRb3rE2hfBMAOHTKMKqyqpRzt5Tc2dfH551NuBJxqJ45RFIAFzJLBUOfHxGB2PX6CfNm004NpWTf4A")

const PaymentForm = ({handleNext,handleBack}) => {
  return (
    <>
     <Review/>
      <Divider/>

<Typography variant="h6" gutterBottom style={{margin:"20px 0"}} >
 Payment method
</Typography>

<Elements stripe={spripePromise}>
<CheckoutPayment handleNext={handleNext} handleBack={handleBack} />

</Elements>



    </>
  )
}

export default PaymentForm