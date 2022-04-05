import './App.css';
import Products from './components/Product/Products';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import { Routes, Route } from "react-router-dom";
import SignIn from './sing/signIn';
import { SignUp } from './sing/signUp';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

function App() {
  return (
    <div className="App">
     <Navbar />  
      <Routes>
      <Route path="/" element={  <Products />} />
        <Route path="/checkout" element={ <Checkout />} />
        <Route path="/signin"  element={ <SignIn/>} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/checkout-page" element={ <CheckoutForm/>} />
          
      </Routes>/
    
   
     </div>
  );
}

export default App;
