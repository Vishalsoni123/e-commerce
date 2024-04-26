import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { FaBasketballBall } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";

function Navbar() {
  return (
    <>
       <div className='main-container'>
        <div className='nav1'>
            <h1>E-store.in</h1>
            <BsCart4 color='white' />
            
        </div>

        <div className='right'>
            <ul className='list-item'>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/men'}> <li>Men</li></Link> 
               <Link to={'/women'}> <li>Women</li></Link>
                <Link to={'/About'}><li>About</li></Link>
                <Link to={'/Wishlist'}><li>WishList</li></Link>
            </ul>
        </div>
        <div className='right' >
        <ul className='list-item' >
                 <IoMdLogIn  color='white'/>
              <Link to={'/Login'}><li>Login</li></Link> 
             {/* <Link to={'/Signup'}> <li>Signup</li></Link>  */}
        </ul>
        </div>
       </div>
  </>
  )
}

export default Navbar
