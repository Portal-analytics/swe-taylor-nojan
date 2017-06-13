import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to the home page!
        </Text>
        <Text style={styles.instructions}>
          Click on the gear to go to settings
        </Text>
        <Text style={styles.instructions}>
          Swipe from the left side of the screen{"\n"}
          to the right to open up the menu!
        </Text>
      </View>
    );
  }
}
