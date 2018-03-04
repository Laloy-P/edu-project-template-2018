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

const globalStyle = {
  fontFamily:'arial',
  color: '#333',
  margin: '40px',
  padding:'40px',
  textAlign: 'center',
}
const serieTitle = {
  fontWeight : '300',
  fontSize : '18px',
  backgroundColor: '#4080FF',
  padding:'16px',
  marginBottom:'0px',
  boxShadow: '0px -5px 10px #aaa',
  color:'white'
}
const serieTable = {
  width : '100%',
  backgroundColor:'white',
  boxShadow: '0px 5px 10px #aaa',
}

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
            <section style = {globalStyle}>
              <h2 style = {serieTitle} >Series</h2>
              <table style = {serieTable}>
                <tr>
                  <th>Nom</th>
                  <th>Episode</th>
                  <th>Note</th>
                </tr>
                  { episodes.map ( episode =>
                    <TabItems episode = {episode}/>
                  )}
              </table>
             </section>
         );
     }
 }

export default ListEpisodes;
