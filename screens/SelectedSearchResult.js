import React, { Component } from "react";
import { connect } from "react-redux";

import SelectedRecipe from "../components/SelectedRecipe";

class SelectedSearchResult extends Component {
  static navigationOptions = {
    title: "Recipe"
  };

  render() {
    return <SelectedRecipe recipe={this.props.selectedRecipe} />;
  }
}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.search.selectedRecipe
  };
};

export default connect(mapStateToProps)(SelectedSearchResult);
