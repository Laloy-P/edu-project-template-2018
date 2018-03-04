import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

const tableElement = {
  width : '80%',

}

class TabItems extends Component {
  constructor(props) { super(props); }

  render() {
      return(

            <tr>
                <td>{this.props.episode.Serie}</td>
                <td>{this.props.episode.Episode}</td>
                <td>{this.props.episode.Note}</td>
            </tr>
            
      );
  }
  }

export default TabItems;
