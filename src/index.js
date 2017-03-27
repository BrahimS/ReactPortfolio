/*==================
 Index.js
================== */

// @flow
import { render } from 'react-dom';
import Routes from './router';



// import css
import './assets/css/App.css';

// render the application
render(Routes, document.querySelector('.myAppWrapper'));
