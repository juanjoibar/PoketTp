import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='menu'>
      <div className="menu-togglex" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li><Link to="/" onClick={handleMenuToggle}>Inicio</Link></li>
        {/* <li><Link to="/buscar" onClick={handleMenuToggle}>Buscar</Link></li> */}
        <li><Link to="/contacto" onClick={handleMenuToggle}>Contacto</Link></li>
      </ul>
    </div>
  );
};

export default Menu;