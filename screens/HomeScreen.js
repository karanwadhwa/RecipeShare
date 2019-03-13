import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import { View, Subtitle, Caption, Title } from "@shoutem/ui";
import Masonry from "react-native-masonry";

import {
  fetchLatestRecipes,
  selectLatestRecipe
} from "../store/actions/latestRecipes";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    this.props.fetchLatestRecipes();
  }

  renderLatestRecipes = () => {
    const { recipes } = this.props;
    const bricks = recipes.map(recipe => {
      return {
        data: recipe,
        key: recipe.idMeal,
        uri: recipe.strMealThumb,
        onPress: data => {
          this.props.selectLatestRecipe(data);
          this.props.navigation.navigate("SelectedLatest");
        },
        renderFooter: data => {
          return (
            <View
              style={{
                backgroundColor: "#FBFBFB",
                borderColor: "#E4E4E4",
                borderWidth: 0.5,
                padding: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10
              }}
            >
              <Title>{data.strMeal}</Title>
              <View styleName="horizontal space-between">
                <Caption
                  style={{
                    color: "#555",
                    marginTop: 5,
                    alignSelf: "flex-start"
                  }}
                >
                  {data.strCategory}
                </Caption>
                <Caption
                  style={{
                    color: "#999",
                    marginTop: 5,
                    alignSelf: "flex-start"
                  }}
                >
                  {data.strArea}
                </Caption>
              </View>
            </View>
          );
        }
      };
    });

    return (
      <Masonry
        columns={2}
        bricks={bricks}
        spacing={2}
        imageContainerStyle={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      />
    );
  };

  render() {
    if (!this.props.recipes[0]) {
      return (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={styles.ActivityIndicator}
        />
      );
    }

    return <View style={styles.container}>{this.renderLatestRecipes()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.latest.loading,
    refreshing: state.latest.refreshing,
    recipes: state.latest.recipes
    //selectedRecipe: state.latest.selectedRecipe
  };
};

export default connect(
  mapStateToProps,
  { fetchLatestRecipes, selectLatestRecipe }
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  ActivityIndicator: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});
