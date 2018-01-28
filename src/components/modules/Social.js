//=================
// Social icons Component
//=================

import React from 'react';
import { Link } from 'react-router';

class Social extends React.Component {
  render() {
    return (
      <section className="social_links">
        <ul className="iconsSp marginL">
          <Link to="http://brahimsourny.com/build/data/Brahim_Sourny_CV.pdf" title="download my CV" target="_blank"><li className="cloud"></li></Link>
          <Link to="http://codepen.io/BrahimS/pen/PNqPpr" target="_blank" title="Codepen"><li className="codePen marginL" ></li></Link>
          <Link to="https://twitter.com/SournyB" target="_blank" title="Twitter"><li className="twitter marginL twitter_fly" ></li></Link>
        </ul>
    </section>
    );
  }
}

export default Social;
