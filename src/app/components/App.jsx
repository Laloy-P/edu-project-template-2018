import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';


const store = configure();

//piste et aide pour fetch
//cette vidéo est les suivantes : https://www.youtube.com/watch?v=VwiZBveJhq4
// const findAll = new Request('http:localhost:3000/api/episodes',
// {
//   headers: new Headers({
//     'Episode' : 'application/json'
//   })
// })
//
// fetch(findAll,{
//   mode :'no-cors',
//   method: 'GET'
// }).then(function(response){
//   return response.json();
// }).then(function(j){
//   console.log(j)
// }).catch(function(err){
//   console.log(err);
// });



//Components
class EpisodeComponent extends Component {

    render() {
        return(
        <div className="EpisodeComponent">
          <Route path="/" component={EpisodeListComponent}></Route>
          <Route path="/" component={EpisodeFormComponent}></Route></div>);
    }
};


class EpisodeListComponent extends Component {

    render() {
        return(
        <table><tr>
          <th>Id</th>
          <th>Serie</th>
          <th>Season</th>
          <th>Episode</th>
        </tr>
        <Route path="/" component={EpisodeItemComponent}></Route>
        <Route path="/" component={EpisodeItemComponent}></Route>
      </table>
      );
    }
};

class EpisodeItemComponent extends Component { //un composant par ligne
    render() {

      return(
        <tr><td>5454</td><td>Lucifer</td><td>1</td><td>2</td></tr>
      )
    }
};

class EpisodeFormComponent extends Component {

    render() {

      return(
        <form>
          <label for="serie">Serie</label>
          <input type="text" id="serie"/>
          <label for="season">Season</label>
          <input type="number" id="season"/>
          <label for="episode">Episode</label>
          <input type="number" id="episode"/>
          <input type="submit"/>
        </form>
      )
    }
};

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <div>
                    <Route path="/" component={EpisodeComponent}></Route>
                  </div>
                </Router>
            </Provider>
        );
    }
};
