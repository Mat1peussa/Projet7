import React from 'react';
import Logo from '../../assets/images/logoHeader.png';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="kasa-header">
        <img src={Logo} alt='Logo' className='kasa-logo' />
        <nav className="kasa-header-nav">
          <NavLink to="/" className='home'>ACCUEIL</NavLink>
          <NavLink to="/aPropos"className='aPropos'>A PROPOS</NavLink>
        </nav>
    </div>
  )
}
