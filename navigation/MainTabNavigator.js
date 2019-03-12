import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="home" size={26} color={tintColor} />
  )
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="search" size={26} color={tintColor} />
  )
};

const FavouritesStack = createStackNavigator({
  Settings: FavouritesScreen
});

FavouritesStack.navigationOptions = {
  tabBarLabel: "Favourites",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="star" size={26} color={tintColor} />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    FavouritesStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default MainTabNavigator;
