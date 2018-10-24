import React, { Component } from "react";
import { View, Text, Platform } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return <View style={{ flex: 1, backgroundColor: "red" }} />;
  }
}

export default Home;
