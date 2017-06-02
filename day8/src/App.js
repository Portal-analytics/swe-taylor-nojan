import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var index_counter = 0;
var counter = 0;
var quotes_list = ["Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
              "Don't cry because it's over, smile because it happened.",
              "You only live once, but if you do it right, once is enough.",
              "To live is the rarest thing in the world. Most people exist, that is all.",
              "It is better to be hated for what you are than to be loved for what you are not.",
              "It does not do to dwell on dreams and forget to live.",
              "Life is what happens to us while we are making other plans."]
class App extends Component {
  state = {
    index: index_counter,
    counter: counter
  }
  incrementer = () => {
    index_counter++
    counter++
    if (index_counter === quotes_list.length-1){
      index_counter = 0
    }
    this.setState({
      ...this.state,
      index: index_counter,
      counter: counter
    }
    )
  }
  render() {
    return (
      <div className="App">
       <div>{quotes_list[this.state.index]}</div>
       <button onClick={this.incrementer}> Next Quote </button>
       <div> You have clicked {this.state.counter} times </div>
      </div>
    );
  }
}

export default App;
