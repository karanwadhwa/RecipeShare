import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { View, Subtitle, Divider } from "@shoutem/ui";

class IngredientList extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <View style={styles.sectionDivider}>
          <Divider styleName="line" />
          <Subtitle styleName="h-center">Ingredients</Subtitle>
          <Divider styleName="line" />
        </View>
        <FlatList
          data={this.props.ingredients}
          renderItem={({ item }) => (
            <View>
              <View style={{ paddingVertical: 5 }}>
                <Subtitle>
                  {item.measure} {item.ingredient}
                </Subtitle>
              </View>
              <Divider styleName="line" />
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }
}

export default IngredientList;

const styles = StyleSheet.create({
  sectionDivider: {
    marginVertical: 10,
    backgroundColor: "#F3F3F3"
  },
  list: {
    paddingVertical: 5
  }
});
