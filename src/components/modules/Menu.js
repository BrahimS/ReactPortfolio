//=================
// Manu Component
//=================

// @flow
import React from 'react';
import NLink from './NLink';

class Menu extends React.Component {
  render() {
    return (
      <section>

        <nav className="navbar" role="navigation">

          <ul className="nav">
            <il className="nav_item"><NLink to="/">About</NLink></il>
            <il className="nav_item"><NLink to="WebExp">Side Projects</NLink></il>
            <il className="nav_item"><NLink to="Contact">Contact</NLink></il>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Menu;
