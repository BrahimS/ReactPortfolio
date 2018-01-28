//=================
// Manu Component
//=================

import React from 'react';
import NLink from './NLink';

class Menu extends React.Component {
  render() {
    return (
      <div>

        <nav className="navbar" role="navigation">
          <ul className="nav">
            <il className="nav_item"><NLink to="/">About</NLink></il>
            <il className="nav_item"><NLink to="projects">Projects</NLink></il>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
