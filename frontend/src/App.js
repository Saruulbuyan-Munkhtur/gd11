import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/2' element = {<ShopCategory category = "2"/>}/>
        <Route path = '/3' element = {<ShopCategory category = "3"/>}/>
        <Route path = '/4' element = {<ShopCategory category = "4"/>}/>
        <Route path = "product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignUp/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
