import React from "react";
import { connect } from "react-redux";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  RefreshControl
} from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";

import { fetchRandomRecipe } from "../store/actions/randomRecipe";

import SelectedRecipe from "../components/SelectedRecipe";

class RandomRecipeScreen extends React.Component {
  static navigationOptions = {
    title: "Random Recipes"
  };

  state = {
    refreshing: false
  };

  componentDidMount() {
    this.props.fetchRandomRecipe();
  }

  refreshRecipe = async () => {
    this.setState({ refreshing: true });
    await this.props.fetchRandomRecipe();
    this.setState({ refreshing: false });
  };

  render() {
    if (!this.props.recipe[0]) {
      return (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={styles.ActivityIndicator}
        />
      );
    }

    return (
      <SelectedRecipe
        recipe={this.props.recipe[0]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refreshRecipe}
          />
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.random
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomRecipe }
)(RandomRecipeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  ActivityIndicator: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});
