import './App.css';
import Products from './components/Product/Products';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar />  
      <Routes>
      <Route path="/" element={  <Products />} />
        <Route path="checkout" element={ <Checkout />} />

      </Routes>
    
   
     </div>
  );
}

export default App;
