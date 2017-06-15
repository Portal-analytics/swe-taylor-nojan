import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import TextBox from "./App.js";
import { firebaseData } from "./firebase-config";
import * as firebase from "firebase";
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
    quotes: [],
    input: "",
    quotes_kavya: []
  };

  updateText = text => {
    this.setState({
      ...this.state,
      inputQuote: text
    });
  };

  addText = () => {
    newQuotes = this.state.quotes;
    newQuotes.push({
      quote: this.state.inputQuote,
      date: new Date().toTimeString().slice(0, 5),
      name: "Taylor and Nojan"
    });
    this.refs.newQuotes.value = "";
    firebase.database().ref("/nojan-taylor").set({
      quotes: newQuotes
    });
    var readData = firebase.database().ref("/nojan-taylor");
    readData.on("value", snapshot => {
      if (snapshot.val() === null) {
        this.setState({
          ...this.state,
          quotes: []
        });
      } else {
        this.setState({
          ...this.state,
          quotes: snapshot.val().quotes
        });
      }
    });

    var pairReadData = firebase.database().ref("/kavya-annie");
    pairReadData.on("value", snapshot => {
      if (snapshot.val() === null) {
        this.setState({
          ...this.state,
          quotes_kavya: []
        });
      } else {
        this.setState({
          ...this.state,
          quotes_kavya: snapshot.val().quotes
        });
      }
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
        {this.state.quotes.map(info => {
          return (
            <View>
              <Text style={styles.welcome}>Message: {info.quote}</Text>
              <Text>User: {info.name}</Text>
              <Text>
                Time: {info.date}
                {"\n"}
              </Text>

            </View>
          );
        })}
        {this.state.quotes_kavya.map(info => {
          return (
            <View>
              <Text style={styles.welcome}>Message: {info.quote}</Text>
              <Text>User: {info.name}</Text>
              <Text>
                Time: {info.date}
                {"\n"}
              </Text>

            </View>
          );
        })}
      </View>
    );
  }
}
