//=================
// Header Component
//=================
import React from 'react';

// Custom Components
import Menu from './Menu';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <header className="grid_col__12 panel headerBrahim">
        <Logo />
        <Menu />
      </header>
    );
  }
}

export default Header;
