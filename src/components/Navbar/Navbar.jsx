import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>FLORAMIRA</p>
        </div>
        <ul className="nav-menu">
          <li>Shop</li>
          <li>Birthday</li>
          <li>Valentines</li>
          <li>Anniversary</li>
          <li>Teacher's Day</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt=""/>
        </div>
    </div> 
  )
}

export default Navbar