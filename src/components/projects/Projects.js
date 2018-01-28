//=================
// Projects Component
//=================

import React from 'react';
import NLink from '../modules/NLink';

class Projects extends React.Component {
  render() {
    return(
      <div className="wrapper slide_up">
        <section className="project_intro bio ">
          <p className="para_intro">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </section>

        <section className="grid content_margin">
          <div className="grid_col__4 row ">
            <article className="project_grid">
              <div className="project_image">
                <h2 className="">Paysagiste</h2>
                <span className="porject_type "> Conception, branding, design and front-end develepement</span>
                <NLink to="Paysagiste">
                  <div className="project_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                    <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                    <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
                  </svg>
                </div>
              </NLink>
            </div>
          </article>
        </div>

        <div className="grid_col__4 row ">
          <article className="project_grid2">
            <div className="project_image">
              <h2 className="">Rêve en blanc</h2>
              <span className="porject_type "> Conception, web design and front-end develepement</span>
              <NLink to="Reb">
                <div className="project_btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                  <path className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                  <path className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
                </svg>
              </div>
            </NLink>
          </div>
        </article>
      </div>

      <div className="grid_col__4 row ">
        <article className="project_grid3">
          <div className="project_image">
            <h2 className="">Yogin</h2>
            <span className="porject_type "> Conception, branding, design and front-end develepement</span>
            <NLink to="Yogin">
              <div className="project_btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.7 111.7">
                <path  className="project_btn" d="M0 111.7L91.7 0v111.7z"/>
                <path  className="plus" d="M59.4 90.3v-7.4H52v-4.5h7.4V71h4.7v7.4h7.4v4.5h-7.4v7.4h-4.7z"/>
              </svg>
            </div>
          </NLink>
        </div>
      </article>
    </div>
  </section>
  { this.props.children }
</div>

)
}
}

export default Projects;
