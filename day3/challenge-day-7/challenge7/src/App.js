import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = ["Smile", "Keep smiling", "You're probably not that bad", "Someone's bound to be worse", "Keep going", 
"Even if you are that bad, you're probably good at something", "Just stop being a baby", "Stop not smiling",
"Michael Jordan was probably bad at things too"]

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    counter: 0,
    index: 0
  }
  this.nextQuote = this.nextQuote.bind(this);
}
nextQuote(){
  this.setState({
    counter: this.state.counter + 1,
    index: this.state.index + 1
  })
  if(this.state.index === quotes.length - 1){
    this.setState({
      ...this.state,
      index: 0
    })
  }
}
  render() {
    return (
      <div className="App">
          <h2>Motivation Clicker</h2>
          {quotes[this.state.index]}
          <div>
            Motivation Counter: {this.state.counter}
          </div>
      <button onClick={this.nextQuote}> Next </button>
      </div>
    );
  }
}

export default App;
