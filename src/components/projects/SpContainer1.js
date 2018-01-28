//=================
// Project Container Component
//=================

import React from 'react';
import SpTemplate from './SpTemplate';
import ArrowNav from './ArrowNav';


class SpContainer1 extends React.Component {
   render() {
      let contentSp = this.props.route.data;
      let pageContent = contentSp.map((content) => {
         return <SpTemplate title1={content.title1}
                            desc1={content.description1}
                            subt1={content.subtitle1}
                            img1={content.img_src1}
                            key={content.id}


                            title2={content.title2}
                            desc2={content.description2}
                            subt2={content.subtitle2}
                            key={content.id}

                            title3={content.title3}
                            desc3={content.description3}
                            subt3={content.subtitle3}
                            key={content.id}

                            title4={content.title4}
                            desc4_1={content.description4_1}
                            desc4_2={content.description4_2}
                            subt4_1={content.subtitle4_1}
                            subt4_2={content.subtitle4_2}
                            key={content.id}
                  />

      });
      return (
         <section className="wrapper">
              <section className="grid_col__12 slide_up">
               <h1 className="headline_secondary"> {this.props.route.Hline} </h1>
               <div className="img_margin image_container"></div>
               {pageContent}
               <article className="grid ">
              <div className="img_margin image_result"></div>
              </article>
              <ArrowNav />
           </section>
        </section>
      );
   }
}

export default SpContainer1;
