const express= require('express')
const Stripe= require('stripe')

const cors= require('cors');
const { StraightTwoTone } = require('@mui/icons-material');

const stripe= new Stripe("sk_test_51Jdbx8Kp0nVpO7XB7Oa62BNclUBFgqLuUX7ErgnMIFr3S3QLeemzFENa8aklhzdWHJhkD9tHHdIXXFCkfW7U0TC600LQt8Pdkt")
const app= express();

//middleware
app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json())

app.post("/api/checkout",async (req,res)=>{
    console.log(req,res)
    const {id, amount}= req.body;

    try {
   const payment= await stripe.paymentIntents.create({
       amount,
       currency:"USD",
       description:"backet of products",
       payment_method:id,
       confirm:true
   })    

   console.log(payment)
   return res.status(200).json({message:"Succesful payment"})
    } catch (error) {
         return res.json({message:error.raw.message})
    }

    res.send('recibido')
})


app.listen(3001,()=> console.log('server lisening port',3001))