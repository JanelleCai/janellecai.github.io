import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="px-8 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-header">Janelle Cai</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className={`hover:text-cyan-900 ${location.pathname === '/' ? 'text-cyan-900' : 'text-cyan-600'}`}>home</Link></li>
          <li><Link to="/projects" className={`hover:text-cyan-900 ${location.pathname === '/projects' ? 'text-cyan-900' : 'text-cyan-600'}`}>projects</Link></li>
          <li><Link to="/teaching" className={`hover:text-cyan-900 ${location.pathname === '/teaching' ? 'text-cyan-900' : 'text-cyan-600'}`}>teaching</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;