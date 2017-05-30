import React, { Component } from 'react';
import './App.css';
var index = 0;
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp_name: '', temp_description: '', temp_price: '', name: '', description: '', price: '', contracts:[]};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handleDescriptionEdit = this.handleDescriptionEdit.bind(this);
    this.handlePriceEdit = this.handlePriceEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
  handleNameEdit(event) {
    this.setState({...this.state, temp_name: event.target.value});
  }
    handleDescriptionEdit(event) {
    this.setState({...this.state, temp_description: event.target.value});
  }
    handlePriceEdit(event) {
    this.setState({...this.state, temp_price: event.target.value});
  }
 
  handleSubmit(event) {
    var array1=this.state.contracts,
    updatedContracts = array1.concat([{index: index, name: this.state.name, description: this.state.description, price: this.state.price }]);
    index++;
    this.setState({
      ...this.state,
      contracts: updatedContracts
    })
  
    event.preventDefault();
  }
  handleEditSubmit(contract) {
    const updatedContracts = this.state.contracts.slice(0);
    updatedContracts[contract.index].editing = false;
    updatedContracts[contract.index].name = this.state.temp_name + " "
    updatedContracts[contract.index].description = this.state.temp_description + " "
    updatedContracts[contract.index].price = this.state.temp_price + " "
    this.setState({
      ...this.state,
      contracts: updatedContracts
    })
  }

  handleEdit(contract) {
     const updatedContracts = this.state.contracts.slice(0);
     updatedContracts[contract.index].editing = true;
     this.setState({
      ...this.state,
      contracts: updatedContracts
    })

  
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
      <ul>
      {this.state.contracts.map(contract => {
   return <li> Name: {contract.name} 
     {contract.editing &&  <input type="text" value={this.state.temp_name} onChange={this.handleNameEdit} />}
     Description: {contract.description}
     {contract.editing &&  <input type="text" value={this.state.temp_description} onChange={this.handleDescriptionEdit} />}
      Price: {contract.price}
      {contract.editing &&  <input type="text" value={this.state.temp_price} onChange={this.handlePriceEdit} />}
       <button onClick = {() => {this.handleEdit(contract)}}> Edit</button > <button onClick = {() => {this.handleEditSubmit(contract)}}> Done </button></li>;
})}
     </ul>
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
