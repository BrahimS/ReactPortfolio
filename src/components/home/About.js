//=================
// About Component
//=================
//@flow
import React from 'react';



// Custom Copmonents
import Social from '../modules/Social';
import Footer from '../modules/Footer';


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Your name",
      subTitle: "Your title",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
    }
  }
  render() {
    return (
        <div className="wrapper slide_up ">
          <section className="grid_col__12 content_margin">
          <h1 className="headline_primary"> { this.state.title }</h1>
            <span className="sub_title ">{ this.state.subTitle }</span>
            <article className="grid_col__10 bio">
            <p> { this.state.description }</p>
            </article>
          </section>
          <Social />
          <section>
            <Footer />
          </section>
        </div>
    );
  }
}

export default About;
