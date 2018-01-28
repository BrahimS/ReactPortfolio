//=================
// Arrow Navigation Component
//=================

import React from 'react';



class ArrowNav extends React.Component {

  render() {
    return (
      <article className="navigation_arrows">
        <a href="#"><div className="fleche_previous"></div></a>
        <a href="#"><div className="fleche_next"></div></a>
      </article>
     ) ;
    }
  }
  export default ArrowNav;
