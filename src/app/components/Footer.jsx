import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

class Footer extends Component {
    render() {
        return(
          <footer className="footer">
            <div style={{textAlign: 'center'}} className="container">
                <span className="text-muted">Laloy Pierre --- Veillault Adrien</span>
            </div>
        </footer>
        );
    }
};

export default Footer;
