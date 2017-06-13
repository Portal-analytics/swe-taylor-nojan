import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

const styles = {
  container: {
    fontSize: 40
  }
};

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>:(</Text>
      </View>
    );
  }
}
