import React from "react";
import { View, Text, StyleSheet } from "react-native";

class FavouritesScreen extends React.Component {
  static navigationOptions = {
    title: "Favourites"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>FavouritesScreen</Text>
      </View>
    );
  }
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
