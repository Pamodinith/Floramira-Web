
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/birthday' element={<shopcategory category="birthdays"/>}/>
        <Route path='/valentine' element={<shopcategory category="valentines"/>}/>
        <Route path='/anniversary' element={<shopcategory category="anniversarys"/>}/>
        <Route path='/product' element={<product/>}>
          <Route path=':productID' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
