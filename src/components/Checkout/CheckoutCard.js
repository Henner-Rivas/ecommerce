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


export default function CheckoutCard({product,deleteAll}) {

  console.log("🚀 ~ file: CheckoutCard.js ~ line 14 ~ CheckoutCard ~ product", product)
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      title={product.name}
      subheader="in Stock"

        action={
           <Typography
            className='d'
            variant='h5'
            color='textSecondary'
           >
             
         { accounting.formatMoney(product.price)  }
           </Typography>
            
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      { product.productType} 
        </Typography> 
      </CardContent>
      <div className='addAndDelete'>
         <IconButton>
           -
         </IconButton>
         <IconButton>
           <h5>0</h5>
         </IconButton>
         <IconButton>
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
