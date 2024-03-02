import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop")
  return (
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>FLORAMIRA</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}>SHOP{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("birthday")}}>BIRTHDAY{menu==="birthday"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("valentine")}}>VALENTINE{menu==="valentine"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("anniversary")}}>ANNIVERSARY{menu==="anniversary"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt=""/>
          <div className="nav-cart-count">0</div>
        </div>
    </div> 
  )
}

export default Navbar