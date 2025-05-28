/* eslint-disable react/jsx-no-undef */
import React ,{useContext, useState} from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const[menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext)


  return (
    <div className='navbar'>
        
        <div className='nav-logo'>
            <img src={logo} alt=""></img>
            <p>Clothes</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Man</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ai")}}><Link style={{textDecoration:"none"}} to='/ai'>Visual</Link> {menu==="ai"?<hr/>:<></>}</li>

        </ul>
        
        <div className="search-bar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

         <input type="text" placeholder="Search products..."/>
         <button><i className="fas fa-search"></i></button>
        </div>
        
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
          <Link to='/buy'><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{ getTotalCartItems()}</div>
        </div>
        <Link to="/profail" className="profile-icon">
  <img 
    src="https://e7.pngegg.com/pngimages/813/118/png-clipart-silhouette-icon-blank-person-template-share-icon-black-and-white.png" 
    alt="Profile" 
  />
</Link>


        
        
            
    </div>
  )
}
 export default Navbar;