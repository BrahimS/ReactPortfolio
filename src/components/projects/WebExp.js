//=================
// Projects Component
//=================
// @flow
import React from 'react';
import { Link } from 'react-router';

class WebExp extends React.Component {
  render() {
    return(
      <div className="wrapper slide_up">
        <section className="project_intro bio ">
          <p className="grid_col__10 para_intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
          </p>
        </section>

        <section className="grid content_margin">
          <div className="row ">
            <article className="img_webExp__1">
              <div className="project_image">
                <h2 className="">Hover Effect</h2>
                <span className="porject_type"> Exprimenting with css3 hover effect images</span>
                <Link to="http://codepen.io/BrahimS/full/rWqMwJ/"target="_blank" title="Codepen" >
                  <div className="project_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                    <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                    <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
                  </svg>
                </div>
              </Link>
            </div>
          </article>
        </div>

        <div className="grid_col__4 row ">
          <article className="img_webExp__2">
            <div className="project_image">
              <h2 className="">Starry Night </h2>
              <span className="porject_type"> This pen is inspired by the Starry Night: V.Van Gogh</span>
              <Link to="http://codepen.io/BrahimS/full/PbroGM/" target="_blank" name="codepen">
                <div className="project_btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                  <path  className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                  <path  className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
                </svg>
              </div>
            </Link>
          </div>
        </article>
      </div>

        <div className="grid_col__4 row ">
          <article className="img_webExp__3">
            <div className="project_image">
              <h2 className=""> Arabic Greeting</h2>
              <span className="porject_type"> A javaScript program that welcomes you in Arabic</span>
              <Link to="http://codepen.io/BrahimS/full/bpMEBa/" target="_blank" name="codePen">
                <div className="project_btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                  <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                  <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
                </svg>
              </div>
            </Link>
          </div>
        </article>
      </div>

      <div className="grid_col__4 row ">
      <article className="img_webExp__4">
        <div className="project_image">
          <h2 className="">Popup Window</h2>
          <span className="porject_type"> A Landing Page + a popup window</span>
          <Link to="http://codepen.io/BrahimS/full/KNZoaG/" target="_blank" name="codePen">
            <div className="project_btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
              <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
              <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
            </svg>
          </div>
        </Link>
      </div>
    </article>
  </div>

  <div className="grid_col__4 row ">
  <article className="img_webExp__5">
    <div className="project_image">
      <h2 className="">keep The Move</h2>
      <span className="porject_type"> A Three.js Spinning Spheres. Only for desktop</span>
      <Link to="http://codepen.io/BrahimS/full/eBEPew/" target="_blank" name="codePen">
        <div className="project_btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
          <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
          <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
        </svg>
      </div>
    </Link>
  </div>
</article>
</div>


<div className="grid_col__4 row ">
<article className="img_webExp__7">
  <div className="project_image">
    <h2 className="">Time for a walk</h2>
    <span className="porject_type"> A javacript scroll to top, in this exemple i used jQuery library </span>
    <Link to="http://codepen.io/BrahimS/full/rWJRJR/" target="_blank" name="codePen">
      <div className="project_btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
        <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
        <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
      </svg>
    </div>
  </Link>
</div>
</article>
</div>



  </section>
  { this.props.children }
</div>

);
}
}

export default WebExp;
