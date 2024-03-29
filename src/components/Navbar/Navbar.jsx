import React, { useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>FLORAMIRA</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("birthday")}}><Link style={{ textDecoration: 'none'} } to='/birthday'>BIRTHDAY</Link>{menu==="birthday"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("valentine")}}><Link style={{textDecoration: 'none'}} to='/valentine'>VALENTINE</Link>{menu==="valentine"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("anniversary")}}><Link style={{textDecoration: 'none'}} to='/anniversary'>ANNIVERSARY</Link>{menu==="anniversary"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='cart'><img src={cart_icon} alt=""/></Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div> 
  )
}

export default Navbar