//=================
// Social icons Component
//=================

// @flow
import React from "react";
import { Link } from "react-router";

class Social extends React.Component {
  render() {
    return (
      <section className="social_links">
        <ul className="iconsSp marginL">
          <Link to="http://codepen.io/BrahimS" target="_blank" title="Codepen">
            <li className="codePen marginL" />
          </Link>
          <Link
            to="https://twitter.com/SournyB"
            target="_blank"
            title="Twitter"
          >
            <li className="twitter marginL twitter_fly" />
          </Link>
        </ul>
      </section>
    );
  }
}

export default Social;
