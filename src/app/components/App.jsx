import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';
import ListEpisodes from './ListEpisodes';
import AddFileForm from './AddFileForm';
import Header from './Header';
import BoxInfo from './BoxInfo';
import Footer from './Footer';
import './../style/Style.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

const store = configure();
const global = {
  bacgroundColor:'#F1F1F1',
}
class MainPage extends Component {

    render() {
      const episodeAdded = (episode) => {
          this.listCpt.addEpisode(episode);
      };

      const showMsg = (info) => {
          this.info.showMessage(
            {
              message:info.message.message,
              type: info.result
            }
          );
      };

        return(
          <div style = {global}>
            <BoxInfo ref={errorCpt => { this.info = errorCpt; }}/>
            <div className="row">
            <div className="col col-lg-2">
                <AddFileForm infoOccured={showMsg}  addEpisode={episodeAdded}/>
            </div>

              <div className="col">
                <ListEpisodes infoOccured={showMsg} ref={list => { this.listCpt = list; }}/>
              </div>

            </div>
          </div>
        );
    }
};

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <div>
                    <Header />
                    <Route exact path="/" component={MainPage}/>
                    <Footer />
                  </div>
                </Router>
            </Provider>
        );
    }
};
