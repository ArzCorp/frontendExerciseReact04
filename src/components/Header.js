import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <h1>Empresa<span>.com</span></h1>
        </div>
        <div className="header__navbar">
          <Link to="" className="button">Inico</Link>
          <Link to="" className="button">Acerca</Link>
          <Link to="" className="button">Servicios</Link>
          <Link to="" className="button">Productos</Link>
          <Link to="" className="button">Contacto</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;