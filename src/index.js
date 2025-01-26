import React from 'react';
import ReactDOM from 'react-dom';
import NavBarTop from './navbarroutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dropdown.css';
import './assets/css/carousel.css';
import './assets/css/navbar.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Index extends React.Component {
    render() {
      return (
          <div>
            <NavBarTop />
          </div>
      );
    }
  }
  ReactDOM.render(<Index />, document.getElementById('root'));
