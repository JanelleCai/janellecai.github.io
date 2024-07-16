import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-cyan-900 font-bold text-xl">Janelle Cai</div>
        <ul className="flex space-x-4">
          <li><Link to="/"><a href="#" className="text-cyan-600 hover:text-cyan-900">home</a></Link></li>
          <li><Link to="/projects"><a href="#" className="text-cyan-600 hover:text-cyan-900">projects</a></Link></li>
          <li><Link to="/teaching"><a href="#" className="text-cyan-600 hover:text-cyan-900">teaching</a></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;