
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<CustomerRoutes/>}></Route>
      </Routes>
      
      <div>
       
      </div>
      
    </div>
  );
}

export default App;
