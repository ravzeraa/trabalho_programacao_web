import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/agente">AGENTES</Link></li>
        <li><Link to="/skin">SKINS</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
