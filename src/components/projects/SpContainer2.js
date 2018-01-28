//=================
// Project Container Component
//=================

import React from 'react';
import SpTemplate from './SpTemplate';
import ArrowNav from './ArrowNav';
import AvalaibleSoon from './AvalaibleSoon';


class SpContainer2 extends React.Component {
   render() {
      let contentSp = this.props.route.data;
      let pageContent = contentSp.map((content) => {
         return <SpTemplate text={content.text} key={content.id} />
      });
      return (
         <section className="wrapper">

            {pageContent}

           </section>

      );
   }
}

export default SpContainer2;
