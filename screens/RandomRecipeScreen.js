import React from "react";
import { View, Text, StyleSheet } from "react-native";

class RandomRecipeScreen extends React.Component {
  static navigationOptions = {
    title: "Random Recipes"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>RandomRecipeScreen</Text>
      </View>
    );
  }
}

export default RandomRecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
