//=================
// Project Container Component
//=================
// @flow
import React from 'react';
import { Link } from 'react-router';
import EyeIcon from '../modules/EyeIcon';

class RogerPfund extends React.Component {
   constructor() {
      super();
      this.state = {
         title1: "The client",
         description1: "Winner of many international awards, decorated by several institutions, Roger Pfund receives in 2002 of the French Republic the distinction of Officer of the Order of Arts & Letters",

         title3: "Web devlopement",
         description3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
         title4: "Tools and Technologies",
         subtitle4_1: "Frend-end:",
         description4_1: "HTML5, CSS3, jQuery, Ajax,",
         subtitle4_2: "Back-end :",
         description4_2: "Wordpress, MySQL, PHP",
      }
   }
   render() {
      return (
         <section className="wrapper">
            <section className="grid_col__12 slide_up">
               <h1 className="headline_secondary">Atelier Roger Pfund</h1>
               <article className="">
                  <div className="img_margin image_container__roger"></div>
               </article>
            </section>

            <section className="grid_col__10 slide_up para_grid_singlePage">
               <article className="slide_up">
                  <h2> { this.state.title1}</h2>
                  <p>{ this.state.description1 }</p>

               </article>

               <article className="slide_up">
                  <h2>{ this.state.title3 }</h2>
                  <p>{ this.state.description3 }</p>

               </article>
               <article className="slide_up">
                  <h2>{ this.state.title4 }</h2>
                  <h4>{ this.state.subtitle4_1 }</h4>
                  <p>{ this.state.description4_1 }</p>
                  <h4>{ this.state.subtitle4_2 }</h4>
                  <p>{ this.state.description4_2 }</p>
               </article>

               <article className="">
                  <Link to="http://www.atelierpfund.ch/atelier/" target="_blank" ><h4 className="view_site">View the website</h4>
                  <EyeIcon />
               </Link>
            </article>
            <article className="navigation_arrows">
              <Link to="http://localhost:3000/Paysagiste"><div className="fleche_previous" ></div></Link>
              <Link to="http://localhost:3000/ReveenBlanc"><div className="fleche_next" ></div></Link>
            </article>
         </section>
      </section>
   );
}
}

export default RogerPfund;
