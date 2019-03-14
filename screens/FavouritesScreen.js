import React from "react";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity, Linking, StyleSheet } from "react-native";
import {
  View,
  Text,
  Subtitle,
  Caption,
  Row,
  Image,
  Divider,
  Title
} from "@shoutem/ui";

import { selectFavRecipe } from "../store/actions/favouriteRecipes";

class FavouritesScreen extends React.Component {
  static navigationOptions = {
    title: "Favourites"
  };

  renderTags = tags => {
    if (tags !== null) {
      return (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {tags.split(",").map((tag, index) => (
            <Caption style={styles.badge} key={index}>
              {tag}
            </Caption>
          ))}
        </View>
      );
    }
  };

  render() {
    if (!this.props.recipes[0]) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            width: "50%"
          }}
        >
          <Title styleName="h-center">
            Add recipes to your favourites to see them listed here
          </Title>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.props.recipes}
          keyExtractor={item => item.idMeal}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.selectFavRecipe(item);
                this.props.navigation.navigate("SelectedFavourite");
              }}
            >
              <Row>
                <Image
                  styleName="medium rounded-corners"
                  source={{ uri: item.strMealThumb }}
                />
                <View styleName="vertical stretch space-between">
                  <Title>{item.strMeal}</Title>
                  {this.renderTags(item.strTags)}
                  <View styleName="horizontal space-between">
                    <Caption>{item.strCategory}</Caption>
                    <Caption>{item.strArea}</Caption>
                  </View>
                </View>
              </Row>
              <Divider styleName="line" />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.favourites.recipes
  };
};

export default connect(
  mapStateToProps,
  { selectFavRecipe }
)(FavouritesScreen);

const styles = StyleSheet.create({
  container: {
    //flex: 1
    //padding: 15
  },
  badge: {
    backgroundColor: "#DDEEFF",
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 3
  }
});
