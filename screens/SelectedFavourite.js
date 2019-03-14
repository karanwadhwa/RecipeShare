import React, { Component } from "react";
import { connect } from "react-redux";

import SelectedRecipe from "../components/SelectedRecipe";

class SelectedFavourite extends Component {
  static navigationOptions = {
    title: "Recipe"
  };

  render() {
    return <SelectedRecipe recipe={this.props.selectedRecipe} />;
  }
}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.favourites.selectedRecipe
  };
};

export default connect(mapStateToProps)(SelectedFavourite);
