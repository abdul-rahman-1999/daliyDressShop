import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import ProductList from './components/ProductList';
import { AuthContextProvider } from './components/ContextApi/AuthContext';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import HomePage from './components/HomePage';
import { CartProvider } from './components/ContextApi/CartContext';
import Product from './components/Product';
import Cart from './components/Cart';
import ColorSuggestion from './components/ColorSuggestion';
import Checkout from './components/Checkout';

function App() {
  const token = localStorage.getItem("Authorization")
  return <>
  <AuthContextProvider>
    <CartProvider>
    <NavBar/>
 <Routes>
  {
    token ? 
    <Route path='/dailyDress/main' element={<HomePage/>}/>
    :
    <Route path='/' element={<Login/>}/>
  }
  <Route path='/' element={<Login/>}/>
 <Route path='/dailyDress/login' element={<Login/>}/>
 <Route path='/dailyDress/signup' element={<Signup/>}/>
 <Route path='/dailyDress/forgotpassword' element={<ForgotPassword/>}/>
 <Route path='dailyDress/PasswordReset/:email/:token' element={<PasswordReset/>}/>
 <Route path='/dailyDress/main' element={<HomePage/>}/>
 <Route path='/dailyDress/products' element={<ProductList/>}/>
 <Route path='/dailyDress/products/:_id' element={<Product/>}/>
 <Route path='/dailyDress/products/cart' element={<Cart/>}/>
 <Route path='/dailyDress/products/colorsuggestion' element={<ColorSuggestion/>}/>
 <Route path='/dailyDress/products/cart/checkout' element={<Checkout/>}/>
 </Routes>
 </CartProvider>
 </AuthContextProvider>
  </>
}


export default App;
