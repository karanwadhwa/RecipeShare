import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, StyleSheet, RefreshControl } from "react-native";
import { Tooltip, Text } from "react-native-elements";
import FIcon from "@expo/vector-icons/Feather";

import { fetchRandomRecipe } from "../store/actions/randomRecipe";

import SelectedRecipe from "../components/SelectedRecipe";

class RandomRecipeScreen extends React.Component {
  static navigationOptions = {
    title: "Random Recipes",
    headerRight: (
      <Tooltip
        containerStyle={{ alignContent: "center" }}
        height={75}
        width={175}
        withPointer={false}
        backgroundColor="#DDEEFF"
        popover={
          <Text style={{ padding: 10, textAlign: "center" }}>
            Pull-to-Refresh to load new recipes
          </Text>
        }
      >
        <FIcon name="info" size={24} style={{ marginRight: 15 }} />
      </Tooltip>
    )
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
