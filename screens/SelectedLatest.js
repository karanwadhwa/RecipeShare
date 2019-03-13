import React, { Component } from "react";
import { connect } from "react-redux";

import SelectedRecipe from "../components/SelectedRecipe";

class SelectedLatest extends Component {
  static navigationOptions = {
    title: "Recipe"
  };

  render() {
    return <SelectedRecipe recipe={this.props.selectedRecipe} />;
  }
}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.latest.selectedRecipe
  };
};

export default connect(mapStateToProps)(SelectedLatest);
