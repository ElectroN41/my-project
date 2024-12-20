import React,{useState} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);};
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
    Shopnow
    </a>
  </div>
  <div className=/* "navbar-center"*/ {`navbar-center ${isMenuOpen ? 'active' : ''}`}> 
    <ul>
    <li><a href="/Products">Products</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
    </ul> 
  </div>
  <div className="navbar-right">
    <a href="/cart" className="cart-icon">
    <i className="fas fa-shopping-cart"></i>
    <span className="cart-count">0</span>
    </a>
    <a href="/accounts" className="user-icon">
    <i className="fas fa-user"></i>
    </a>
    <div className="hamburger-menu" onClick={toggleMenu}>
                    &#9776;
                </div>
  </div>
</nav>
);
};

export default Navbar;