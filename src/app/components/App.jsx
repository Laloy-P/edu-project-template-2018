import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';


const store = configure();

class TableauEpisodes extends Component {

    render() {
        return(
        <table>
          <tr>
            <td>Série</td><td>Numéro episode</td><td>Score</td>
          </tr>
        </table>);
    }
};

class Swag extends Component {
    render() {
        return(<h1>ce que vous voulez</h1>);
    }
};

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <div>
                    <Route path="/" component={TableauEpisodes}></Route>
                  </div>
                </Router>
            </Provider>
        );
    }
};
