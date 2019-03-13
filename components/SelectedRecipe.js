import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { View, Subtitle, Divider } from "@shoutem/ui";

import RecipeHeader from "./RecipeHeader";
import IngredientList from "./IngredientList";

class SelectedRecipe extends Component {
  compileIngredients = recipe => {
    let ingredients = [];
    for (i = 1; i <= 20; i++) {
      ingredient = eval(`recipe.strIngredient${i}`);
      if (ingredient === "") {
        break;
      }
      measure = eval(`recipe.strMeasure${i}`);
      ingredients.push({ ingredient, measure });
    }
    return ingredients;
  };

  renderInstructions = instructions => {
    return (
      <View style={{ paddingHorizontal: 15, paddingBottom: 20 }}>
        <View style={styles.sectionDivider}>
          <Divider styleName="line" />
          <Subtitle styleName="h-center">Instructions</Subtitle>
          <Divider styleName="line" />
        </View>
        <Subtitle styleName="multiline">{instructions}</Subtitle>
      </View>
    );
  };

  render() {
    const { recipe } = this.props;
    const ingredients = this.compileIngredients(recipe);

    return (
      <ScrollView>
        <RecipeHeader recipe={recipe} />
        <IngredientList ingredients={ingredients} />
        {this.renderInstructions(recipe.strInstructions)}
      </ScrollView>
    );
  }
}

export default SelectedRecipe;

const styles = StyleSheet.create({
  sectionDivider: {
    marginVertical: 10,
    backgroundColor: "#F3F3F3"
  },
  list: {
    paddingVertical: 5
  }
});
