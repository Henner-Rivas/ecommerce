import React from 'react'
import { accounting  } from 'accounting'
import {Button} from '@mui/material'
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
 */  return (
   
    <div className="total" >
    <h5>Total items: 3</h5>
   <h5> {accounting.formatMoney(50)}</h5>
      <Button  variant="contained"  color='secondary'>Ckeck out </Button>
    </div>
  )
}

export default Total