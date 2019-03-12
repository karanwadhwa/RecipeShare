import React from "react";
import { View, Text, StyleSheet } from "react-native";

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SearchScreen</Text>
      </View>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
