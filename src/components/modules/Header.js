/*=================
// Header Component
================= */
// @flow 
import React from 'react';
import { Link } from 'react-router';

// Custom Components
import Menu from './Menu';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <header className="grid_col__12 panel headerBrahim">
          <Link to="http://localhost:3000/"><Logo /></Link>
        <Menu />
      </header>
    );
  }
}

export default Header;
