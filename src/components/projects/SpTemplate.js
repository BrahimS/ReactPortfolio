//=================
// Project Container Component
//=================

import React from 'react';

 const SpTemplate = props => (

   <section className="grid_col__12 para_grid_singlePage">
       <h2> { props.title1 } </h2>
       <p> { props.desc1 } </p>
       <h2> { props.title2 } </h2>
       <p> { props.desc2 } </p>

       <h2> { props.title3 } </h2>
       <p> { props.desc3 } </p>

       <h2> { props.title4 } </h2>
       <h4> { props.subtitle4_1 } </h4>
       <p> { props.desc4_1 } </p>
       <h4> { props.subtitle4_2 } </h4>
       <p>{ props.desc4_2 }</p>

   </section>
 );

export default SpTemplate;
