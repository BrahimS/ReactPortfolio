//==================
// Index.js
//==================
import React from 'react';
import { render } from 'react-dom';
import Routes from './router';

// import css
import './css/index.sass';

// render the application
render(Routes, document.querySelector('.myAppWrapper'));
