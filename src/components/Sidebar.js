import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import Nav from './Nav';
import { Link } from 'gatsby';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>

      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div></Link>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
