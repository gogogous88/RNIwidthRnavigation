import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../containers/Home";
import Link from "../containers/Link";

const HomeStack = createStackNavigator({
  Home: Home
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

const LinkStack = createStackNavigator({ Link: Link });

LinkStack.navigationOptions = {
  tabBarLabel: "Link"
};

export default createBottomTabNavigator({ HomeStack, LinkStack });
