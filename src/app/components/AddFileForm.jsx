import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';
const formContainner = {
  margin: '40px',
  padding:'40px',
  textAlign: 'center',
  fontFamily:'arial',
  color:'#333',
};
const addForm = {
  backgroundColor:'white',
  boxShadow: '0px 5px 10px #aaa',
  width: '25%',
  margin: ' auto',
  padding : '30px'
}
const buttonAdd = {
  cursor: 'pointer',
  border: 'solid #666 2px',
  color: '#666',
  padding:'3px',
  marginTop:'8px',
  backgroundColor: 'transparent',
  fontFamily: 'arial',
  fontSize: '18px',
  textDecoration: 'none',
  transition: 'all 0.2s',

}
const formInput ={
  margin : '12px',
  width : '33%',
}
const formTitle = {
backgroundColor:'#4080FF',
boxShadow: '0px -5px 10px #aaa',
color:'white',
fontWeight:'400',
width: '25%',
margin: ' auto',
padding : '30px'
}
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

          <div style={formContainner}>
              <h2 style={formTitle}> Ajouter un épisode</h2>
              <form style={addForm} onSubmit={this.handleSubmit}>

                <div>
                  <label>Serie:</label>
                  <input style={formInput} name="Serie" type="text" placeholder="Nom" onChange={this.handleInputChange}/>
                </div>
                <div>
                  <label>Code:</label>
                  <input style={formInput} type="text" name="Episode"  placeholder="Code" onChange={this.handleInputChange}/>
                </div>
                <div>
                  <label>Note:</label>
                  <input style={formInput} type="text" name="Note"  placeholder="Note" onChange={this.handleInputChange}/>
                </div>
                <button style={buttonAdd} type="submit" >Ajouter</button>
              </form>
            </div>
          );
      }
  };

  export default AddFileForm;
