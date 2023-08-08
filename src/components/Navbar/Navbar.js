import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Logo from '../../resources/image/Logo.png';

import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <img className='nav-logo' src={Logo}  alt="Логотип"></img>
      <nav className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" className='nav_list_link'  exact="true" onClick={closeMenu}>
          Головна
        </NavLink>
        <NavLink to="/aboutus" className='nav_list_link'  exact="true" onClick={closeMenu}>
          Про нас
        </NavLink> 
        <NavLink to="/ourservices" className='nav_list_link'  exact="true" onClick={closeMenu}>
          Послуги
        </NavLink>
        <NavLink to="/contact" className='nav_list_link'  exact="true" onClick={closeMenu}>
          Контакти
        </NavLink>
      </nav>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
                    