import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
