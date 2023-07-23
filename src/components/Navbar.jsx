import React, { useState } from 'react';
import "./navbar.css";
import images from "../constants/images";
import MenuIcon from '@mui/icons-material/Menu';
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar-cont'>
      <nav className='navbar'>
        <div className='navbar-div-1'>
          <img src={images.gericht} alt="brand-logo" />
        </div>
        <div className='navbar-div-2'>
         <a href='#home'><p>Home</p></a>
        <a href='#about'><p>About</p></a>
        <a href='#menu'><p>Menu</p></a>
        <a href='#awards'><p>Awards</p></a>
        <a href='#contact'><p>Contact</p></a>
        </div>
        <div className='navbar-div-3'>
          <p>Log In / Registration</p>
          <p>Book Table</p>
        </div>
        <div className='navbar-img' onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
      <div className={`popup-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-button" onClick={closeMenu}>
          <MdOutlineRestaurantMenu />
        </div>
        <a href='#home'><p>Home</p></a>
        <a href='#about'><p>About</p></a>
        <a href='#menu'><p>Menu</p></a>
        <a href='#awards'><p>Awards</p></a>
        <a href='#contact'><p>Contact</p></a>
      </div>
    </div>
  );
}
