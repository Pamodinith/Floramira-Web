
import './App.css';
import  Navbar from './components/Navbar/Navbar';
import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Loginsignup from './pages/loginsignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/birthday' element={<Shopcategory category="birthdays"/>}/>
        <Route path='/valentine' element={<Shopcategory category="valentines"/>}/>
        <Route path='/anniversary' element={<Shopcategory category="anniversarys"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
