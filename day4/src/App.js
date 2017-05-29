import React, { Component } from 'react';
import './App.css';


var list1 = []
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: '', price: '', contactlist: list1};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({...this.state, name: event.target.value});
  }
    handleDescriptionChange(event) {
    this.setState({...this.state, description: event.target.value});
  }
    handlePriceChange(event) {
    this.setState({...this.state, price: event.target.value});
  }
 
  handleSubmit(event) {
    this.setState({
      ...this.state,
      contactlist: list1.push(<p> Name: {this.state.name} Description: {this.state.description} Price: {this.state.price} </p>)
    })
  
    event.preventDefault();
  }

  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className= "header">
        Contact Creator
        </div>
        <label className = "info">
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
          Price:
          <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {list1}
      </div>
    
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
       
      </div>
    );
  }
}

export default App;
