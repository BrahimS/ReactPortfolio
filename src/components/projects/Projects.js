//=================
// Projects Component
//=================
// @flow
import React from 'react';
import NLink from '../modules/NLink';
import { Link } from 'react-router';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      projectName: "Roger Pfund",
      projectDesc: "Front-end and back-end development",

    }
  }
  render() {
    return(
      <div className="wrapper slide_up">
        <section className="project_intro bio ">
          <p className="grid_col__10 para_intro">
           {this.state.intro}
          </p>
        </section>

        <section className="grid content_margin">
          <div className="row ">
            <article className="project_grid3">
              <div className="project_image">
                <h2 className="">{this.state.projectName}</h2>
                <span className="porject_type">{this.state.projectDesc} </span>
                <NLink to="RogerPfund">
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

        <div className="grid_col__4 row ">
          <article className="project_grid3">
            <div className="project_image">
              <h2 className="">{this.state.projectName}</h2>
              <span className="porject_type">{this.state.projectDesc} </span>
              <NLink to="RogerPfund">
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

        <div className="grid_col__4 row ">
          <article className="project_grid3">
            <div className="project_image">
              <h2 className="">{this.state.projectName}</h2>
              <span className="porject_type">{this.state.projectDesc} </span>
              <NLink to="RogerPfund">
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

      <div className="grid_col__4 row ">
    <article className="project_grid3">
      <div className="project_image">
        <h2 className="">{this.state.projectName}</h2>
        <span className="porject_type">{this.state.projectDesc} </span>
        <NLink to="RogerPfund">
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

      <div className="grid_col__4 row ">
        <article className="project_grid3">
          <div className="project_image">
            <h2 className="">{this.state.projectName}</h2>
            <span className="porject_type">{this.state.projectDesc} </span>
            <NLink to="RogerPfund">
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

  <div className="grid_col__4 row ">
    <article className="project_grid3">
      <div className="project_image">
        <h2 className="">{this.state.projectName}</h2>
        <span className="porject_type">{this.state.projectDesc} </span>
        <NLink to="RogerPfund">
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

);
}
}

export default Projects;
