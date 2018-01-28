//=================
// About Component
//=================
import React from 'react';



// Custom Copmonents
import Header from '../modules/Header';
// import MainContent from '../modules/MainContent';
import Social from '../modules/Social';
import Footer from '../modules/Footer';


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Brahim Sourny",
      subTitle: "Designer and front-end developer",
        description: "I exercise my creativity on different media. I love to produce websites that are nicely coded with an elegant design, original and above all effective. It is important for me to provide users with accessible and ergonomic interfaces. With significant experience in the field of web design and development, and with a diverse experience and the ability to adapt to different surrounding environment. Today I wish to integrate a team to help achieve important projects with new challenges.",
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
          <Footer />
        </div>
    );
  }
}

export default About;
