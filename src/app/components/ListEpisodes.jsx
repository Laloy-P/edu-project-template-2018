import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';
import TabHeader from './TabHeader';
import TabItems from './TabItems';
import BoxInfo from './BoxInfo'

class ListEpisodes extends Component {

  constructor(props){
         super(props);

         this.state = {
             episodes: []
         };
     }

     componentDidMount() {
         fetch('/api/episodes', {
             method: 'GET',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             }
         })
             .then((response) => {
                 if (response.status >= 400) {
                     throw new Error("Bad response from server");
                 }
                 return response.json();
             })
             .then((datas) => {
                 this.setState({ episodes: datas });
             })
             .catch((error) => {
                 console.error(error);
             });
     }

     render() {
         let episodes = this.state.episodes;
         return(
             <section>
                 <div><a>Series</a></div>

                 <div>
                     <div>
                         <div>Nom</div>
                         <div>Code</div>
                         <div>Note</div>
                     </div>


                     <div>
                         {episodes.map(episode =>
                             <TabItems episode={episode}/>
                         )}
                     </div>
                 </div>
             </section>
         );
     }
 }

export default ListEpisodes;
