import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

class TabItems extends Component {
  constructor(props) { super(props); }

  render() {
      return(
          <section>
              <div>
                  <div>{this.props.episode.Serie}</div>
                  <div >{this.props.episode.Episode}</div>
                  <div>{this.props.episode.Note}</div>
              </div>
          </section>
      );
  }
  }

export default TabItems;
