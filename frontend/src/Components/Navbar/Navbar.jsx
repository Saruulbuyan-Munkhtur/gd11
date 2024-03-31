import React, { useState }  from "react"
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_logo from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    return(
        <div className ='navbar'>
            <div className="nav-logo">
                <img src ={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onMouseEnter={()=>{setMenu("shop")}}><Link style ={{textDecoration: 'none', color: '#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onMouseEnter={()=>{setMenu("2")}}><Link style ={{textDecoration: 'none', color: '#626262'}} to='/2'>2</Link>{menu==="2"?<hr/>:<></>}</li>
                <li onMouseEnter={()=>{setMenu("3")}}><Link style ={{textDecoration: 'none', color: '#626262'}}  to='/3'>3</Link>{menu==="3"?<hr/>:<></>}</li>
                <li onMouseEnter={()=>{setMenu("4")}}><Link style ={{textDecoration: 'none', color: '#626262'}} to='/4'>4</Link>{menu==="4"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to ='/Cart'><img src ={cart_logo} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar