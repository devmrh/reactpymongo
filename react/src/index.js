import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();