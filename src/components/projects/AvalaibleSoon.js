// @flow
import React from 'react';

class AvalaibleSoon extends React.Component {
  constructor() {
  super();
  this.state = {
    title: "Soon",
    description: "The page will be available soon"
  }
}
  render() {
    return(
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

export default AvalaibleSoon;
