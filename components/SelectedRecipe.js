import React, { Component } from "react";
import { Text, View } from "react-native";

class SelectedRecipe extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.recipe.strMeal}</Text>
      </View>
    );
  }
}

export default SelectedRecipe;
