import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForm,FormProvider } from 'react-hook-form';
import AddressInput from './AddressInput';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setShoppingData } from '../../actions/ShoppinCartActions';

export default function AddressForm({handleNext}) {
   const  methods= useForm();
   const dispatch = useDispatch();
   return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
        <FormProvider {...methods}> 
     <form onSubmit={methods.handleSubmit(data=>{
         dispatch(setShoppingData(data))
         handleNext();
     })}>
     <Grid container spacing={3}> 
        <AddressInput required name='firstNanme' label="Fist Name" />
        <AddressInput required name='lastName' label="LastName" />
        <AddressInput required name='Addrees' label="Address" />
        <AddressInput required name='Email' label="Email address" />
        <AddressInput required name='City' label="City" />
        <AddressInput required name='postCode' label="Post Code" />


   {/*      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}


      </Grid>

<div style={{display:"flex", justifyContent:"space-between",marginTop:"1rem" }}>



<Button component={Link} to='/checkout'  >
back checkout
</Button>
<Button type='submit' variant='contained' color="primary" >
next 
</Button>
</div>
     </form>

        </FormProvider>
    </React.Fragment>
  );
}