import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import HomeScreen from "../screens/HomeScreen";
import SelectedLatest from "../screens/SelectedLatest";
import SearchScreen from "../screens/SearchScreen";
import RandomRecipeScreen from "../screens/RandomRecipeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import SelectedFavourite from "../screens/SelectedFavourite";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SelectedLatest
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="home" size={25} color={tintColor} />
  )
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="search" size={25} color={tintColor} />
  )
};

const RandomStack = createStackNavigator({
  Random: RandomRecipeScreen
});

RandomStack.navigationOptions = {
  tabBarLabel: "Random",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="repeat" size={25} color={tintColor} />
  )
};

const FavouritesStack = createStackNavigator({
  Settings: FavouritesScreen,
  SelectedFavourite
});

FavouritesStack.navigationOptions = {
  tabBarLabel: "Favourites",
  tabBarIcon: ({ tintColor }) => (
    <Icon.Feather name="star" size={25} color={tintColor} />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    RandomStack,
    FavouritesStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default MainTabNavigator;
