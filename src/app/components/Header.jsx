import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

class Header extends Component {
    render() {
        return(
            <h1>Gestion des séries</h1>
        );
    }
};

export default Header;
