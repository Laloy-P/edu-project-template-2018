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

    deleteEpisode(id){
          fetch('/api/episodes/'+id, {
            method: 'DELETE',
          }).then(result => {
            result.json().then((res) => {
                console.log(res);
                // if(res.result == 'success'){
                //   this.props.removeEpisode(res.message.data);
                // }
            })
          })
    }
  render() {
      return(

            <tr>
                <td>{this.props.episode.Serie}</td>
                <td>{this.props.episode.Episode}</td>
                <td>{this.props.episode.Note}</td>
                <td>
                   <button onClick={() => {this.deleteEpisode(this.props.episode.id)}}>Supprimer</button>
                </td>
            </tr>

      );
  }
  }

export default TabItems;
