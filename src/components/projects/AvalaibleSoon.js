
import React from 'react';

class AvalaibleSoon extends React.Component {
  render() {
    return(
      <section className="wrapper slide_up">
        <section className="grid_col__12">
          <h1 className="headline_primary txt_centerd slide_up">
           { this.props.route.title }
          </h1>
          <p className="txt_centerd"> { this.props.route.txt}</p>
        </section>
      </section>
    );
  }
}

export default AvalaibleSoon;
