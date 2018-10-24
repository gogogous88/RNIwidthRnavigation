import React, { Component } from "react";
import { View, Text, Platform } from "react-native";

class Link extends Component {
  static navigationOptions = {
    title: "Links"
  };
  render() {
    return <View style={{ flex: 1, backgroundColor: "red" }} />;
  }
}

export default Link;
