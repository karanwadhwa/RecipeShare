import React, { Component } from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { WebBrowser } from "expo";
import { View, Subtitle, Divider, Button } from "@shoutem/ui";

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
      <View style={{ paddingHorizontal: 15 }}>
        <View style={styles.sectionDivider}>
          <Divider styleName="line" />
          <Subtitle styleName="h-center">Instructions</Subtitle>
          <Divider styleName="line" />
        </View>
        <Subtitle styleName="multiline">{instructions}</Subtitle>
        {this.props.recipe.strSource !== "" ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              WebBrowser.openBrowserAsync(this.props.recipe.strSource)
            }
          >
            <Text style={styles.buttonText}>View Recipe Source</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  render() {
    const { recipe, ...rest } = this.props;
    const ingredients = this.compileIngredients(recipe);

    return (
      <ScrollView {...rest}>
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
  },
  button: {
    backgroundColor: "#107AFB",
    marginVertical: 20,
    paddingVertical: 14,
    borderRadius: 5,
    width: "100%",
    alignSelf: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "nunito-extra-bold"
  }
});
