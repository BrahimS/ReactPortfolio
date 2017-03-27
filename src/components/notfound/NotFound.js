/*=================
 Not Found Component
================= */

// @flow
import React from 'react';

class NotFound extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 404,
      description: "Sorry, the page is not found."
    }
  }
  render() {
    return (
      <section className="wrapper slide_up">
        <section className="grid_col__12">
          <h1 className="headline_primary txt_centerd slide_up">
            { this.state.title }
          </h1>
          <p className="txt_centerd"> { this.state.description}</p>
        </section>
      </section>
    );
  }
}

export default NotFound;
