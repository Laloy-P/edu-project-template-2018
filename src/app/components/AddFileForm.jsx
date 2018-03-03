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
      let Serie = target.Serie;
      let value = target.value;

      this.setState({
        [Serie] : value
      })
    }

    render() {
        return(
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Serie:</label>
              <input name="Serie" type="text" className="form-control" placeholder="Name" onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Episode:</label>
              <input type="text" name="Episode" className="form-control"  placeholder="Code" onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Note:</label>
              <input type="text" name="Note" className="form-control"  placeholder="Score" onChange={this.handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-info" >Submit</button>
          </form>
        );
    }
};

export default AddFileForm;
