import {useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link  from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as LinkRouter,useHistory, useNavigate} from 'react-router-dom' 
import { GoogleAuthProvider, signInWithPopup ,onAuthStateChanged} from 'firebase/auth';
import {auth, userExists} from '../firebase/firebase'
import AuthProvider from '../firebase/AuthProvider';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentState, setCurrentState] = useState(0);
  const navigate= useNavigate()
  /* 
  0:incializando
  1:loading
  2:login completo
  3:login pero sin registro
  4:no hay nadie logueado
  */
  /* useEffect(()=>{
    setCurrentState(1)
       onAuthStateChanged(auth, async (user)=>{
        const isRegistred=await userExists(user.uid)
        if(isRegistred){
          ///todo: rediridiar a inicio
          navigate('/')
          setCurrentState(2)
          console.log(user.displayName)
        }else{
          navigate('/signup')
    
          // todo redirigis a chose username
          console.log('no hay nadie authenticado ')
          setCurrentState(3)
        }
       })
  },[navigate]) */

   
 async  function handleOnclick(e) {
     e.preventDefault()
     const googleProvider= new GoogleAuthProvider()
     
     function signInWighGoogle(googleProvider) {
       try{
         const res=  signInWithPopup(auth,googleProvider)
         console.log("🚀 ~ file: signIn.js ~ line 39 ~ signInWighGoogle ~ res", res)
         
        }catch(error){
      console.error(error)
    }
  }
  await signInWighGoogle(googleProvider)
   }
 if(currentState=== 1){
  return <div>Loadign</div>
}
if (currentState===3) {
   return <div>Estas autenticado pero no registrado</div>
} 

function HandleUserLoggedIn(user) {
  navigate('/')
}
/* function HandleUserNotRegistered(user) {
  navigate('/signup')
} */
function HandleserNotLoggedIn(user) {
  setCurrentState(4)
}

if(currentState===4 ){

return ( 
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
               onClick={handleOnclick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <LinkRouter to='/signup' >
                  {"Don't have an account? Sign Up"}
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    );
    }
    return (
      <AuthProvider onUserLoggedIn={HandleUserLoggedIn} 
/*       onUserNotRegistered={HandleUserNotRegistered}
 */      onUserNotLoggedIn={HandleserNotLoggedIn}
      >
        </AuthProvider>
    )
      
}