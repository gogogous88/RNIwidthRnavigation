import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    console.log(this.props.simpleReducer);
    return <View style={{ flex: 1, backgroundColor: "red" }} />;
  }
}

const mapStateToProps = ({ simpleReducer }) => {
  return { simpleReducer };
};

export default connect(mapStateToProps)(Home);
