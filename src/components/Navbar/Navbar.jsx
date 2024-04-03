import { useState } from 'react'
import "../Navbar/Navbar.css";
import Logo from "/src/assets/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const toggleMenu=()=>{
        setToggle(!toggle);
    };
  return (
    <div className='navbar'>
        <div className="logo">
        <Link to={"/"}>
            <img src={Logo} alt="" />
        </Link>
        </div>
        <div className="search-bar">
            <input type="text" />
            <i className='fa fa-search'></i>
        </div>
        <ul className={toggle?"active":""}>
            <li><Link className='list' to={"/"}>Home</Link></li>
            <li><Link className='list' to={"/About-us"}>About Us</Link></li>
            <li><Link className='list' to={"/Shop"}>Shop</Link></li>
            <li><Link className='list' to={"/Contact-us"}>Contact Us</Link></li>
        </ul>
       <div className="nav-icons">
       <Link to={"/Favorite"}>
       <div className="fav-icon">
            <i className='fa fa-heart'></i>
            <span>0</span>
        </div>
       </Link>
       <Link to={"/Cart"}>
       <div className="cart-icon">
            <i className='fa fa-shopping-cart'></i>
            <span>0</span>
        </div>
       </Link>
       </div>
       <div className="menu-bar" onClick={toggleMenu}>
        {toggle?<i className='fa fa-close'></i>: <i className="fa-solid fa-bars"></i>}
       </div>
    </div>
  )
}

export default Navbar;