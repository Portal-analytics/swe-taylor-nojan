import React, { Component } from 'react';
import './App.css';


var list1 = ["nojan"]
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: '', price: '', contactlist: []};
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
      contactlist: this.state.name
    })
    event.preventDefault();
  }

  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
          Price:
          <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.state.contactlist}
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
