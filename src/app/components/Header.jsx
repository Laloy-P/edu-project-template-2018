import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

const headerTitle ={
  fontFamily : 'arial',
  fontWeight : '300',
  textAlign : 'center',
  color:'#333',
}

class Header extends Component {
    render() {
        return(
            <h1 style = {headerTitle}>Gestion des séries</h1>
        );
    }
};

export default Header;
