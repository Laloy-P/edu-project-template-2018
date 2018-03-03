import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

class AddFileForm extends Component {

      constructor(props) {
        super(props);
        this.state = {
          Serie : '',
          Episode : '',
          Note : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleSubmit(event){
        event.preventDefault();
        fetch('/api/episodes', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(response => {
          return response.json()
        }).then((res) => {
            if(res.result != 'error'){
              this.props.addEpisode(res.message.data);
            }
            this.props.infoOccured(res);
        })
      }

      handleInputChange(event){
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
          [name] : value
        })
      }

      render() {
          return(
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Serie:</label>
                <input name="Serie" type="text" placeholder="Name" onChange={this.handleInputChange}/>
              </div>
              <div>
                <label>Code:</label>
                <input type="text" name="Episode"  placeholder="Code" onChange={this.handleInputChange}/>
              </div>
              <div>
                <label>Note:</label>
                <input type="text" name="Note"  placeholder="Score" onChange={this.handleInputChange}/>
              </div>
              <button type="submit" >Submit</button>
            </form>
          );
      }
  };

  export default AddFileForm;
