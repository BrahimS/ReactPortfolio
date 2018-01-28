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
      title: "Your Name",
      subTitle: "UI/UX / Front-end developer",
        description: "Lorem ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose...",
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
