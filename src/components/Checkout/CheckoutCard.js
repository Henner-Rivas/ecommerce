import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import accounting from 'accounting'


export default function CheckoutCard({product,deleteAll,deleteOne,addToOtherCart}) {
   let {name,price, quantity,productType,image}= product;
 
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
      title={name}
      subheader="in Stock"

        action={
           <Typography
            className='d'
            variant='h5'
            color='textSecondary'
           >
             
         { accounting.formatMoney(price)  }
           </Typography>
            
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      { productType} 
        </Typography> 
      </CardContent>
      <div className='addAndDelete'>
         <IconButton onClick={deleteOne}>
           -
         </IconButton>
         <IconButton>
           <h5>{quantity}</h5>
         </IconButton>
         <IconButton onClick={addToOtherCart}>
       +

         </IconButton>


     </div>
      <CardActions disableSpacing className="CardActionsCkeckout" >

 <div className='estrellas'>
      {Array(product.rating)

      .fill()
      .map((_,i)=>(<p>&#11088;</p>)
      )}
 </div>

      <IconButton onClick={deleteAll} >
      <DeleteRoundedIcon/>
      </IconButton>
         </CardActions>
    </Card>
  );
}
