import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import TextBox from "./App.js";

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    padding: 10
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 25
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  output: {
    fontSize: 50,
    color: "blue"
  }
});
export default class Home extends React.Component {
  state = {
    user: "Nojan",
    quotes: [],
    input: "",
    currentTime: null,
    temporary_time: new Date().toTimeString().slice(0, 5)
  };

  updateText = text => {
    this.setState({
      ...this.state,
      inputQuote: text
    });
  };

  addText = () => {
    newQuotes = this.state.quotes;
    newQuotes.push(this.state.inputQuote);
    this.refs.newQuotes.value = "";
    this.setState({
      ...this.state,
      quotes: newQuotes,
      inputQuote: "",
      currentTime: this.state.temporary_time
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="newQuotes"
          style={styles.input}
          placeholder="Enter a quote you'd like to add"
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={this.addText}
          keyboardAppearance="dark"
          returnKeyType="send"
          value={this.state.inputQuote}
        />
        {this.state.quotes.map(quote => {
          return (
            <View>
              <Text style={styles.welcome}>Message: {quote}</Text>
              <Text>User: {this.state.user}</Text>
              <Text>
                Time: {this.state.currentTime}
                {"\n"}
              </Text>

            </View>
          );
        })}
      </View>
    );
  }
}
