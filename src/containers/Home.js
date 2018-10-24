import React, { Component } from "react";
import {
  Animated,
  View,
  Text,
  Platform,
  LayoutAnimation,
  UIManager
} from "react-native";
import { connect } from "react-redux";

import MapView, { Marker } from "react-native-maps";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      retion: {
        latitude: 40.0,
        longitude: -75,
        latitudeDelta: 0.01 * 1000,
        longitudeDelta: 0.01 * 1000
      }
    };
  }

  // componentWillUpdate = () => {
  //   UIManager.setLayoutAnimationEnabledExperimental &&
  //     UIManager.setLayoutAnimationEnabledExperimental(true);
  //   LayoutAnimation.spring({});
  // };

  render() {
    // if (Platform.OS === "android") {
    //   return <View style={{ flex: 1, backgroundColor: "blue" }} />;
    // }
    return (
      <Animated.View style={{ flex: 1, backgroundColor: "red" }}>
        <MapView
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          region={this.state.region}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          {this.state.region &&
            this.state.region.latitude && (
              <Marker.Animated coordinate={this.state.region} />
            )}
        </MapView>
      </Animated.View>
    );
  }
}

const mapStateToProps = ({ simpleReducer }) => {
  return { simpleReducer };
};

export default connect(mapStateToProps)(Home);
