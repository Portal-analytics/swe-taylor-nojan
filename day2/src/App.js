import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const quotes = ["Stop crying. Fucking code.", "Knock Knock. Who's There? Fuck you. Work.", "Show some fucking heart",
        "React isn't that fucking hard, just do it.", "Eat some healthy fucking food.", "Try being a little fucking social.",
        "Fucking smile.", "Make people fucking like you."]

var x = 0;
var y = quotes.length;
var arrayIndex = x;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrayIndex: x,
      arrayLength: y
    };

    this.theSwitch = this.theSwitch.bind(this);
  }
  
  theSwitch() {
    if(this.state.arrayIndex === quotes.length - 1){
      x = 0;
      this.setState({
      arrayIndex: x
    })
    }
    else {
    this.setState({
      arrayIndex: x++
    })
  }
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1 onClick={this.theSwitch} className="App-intro">
          {quotes[this.state.arrayIndex]}
        </h1>
        <h1 className = "subscript" >  A project by Taylor and Nojan <br/> You've completed {this.state.arrayIndex}/7 Clicks <br/>
We've spit out great fucking advice since 5 seconds ago.
</h1>

      </div>
    );
  }
  
}

export default App;
