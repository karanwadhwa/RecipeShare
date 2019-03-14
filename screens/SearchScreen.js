import React from "react";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Constants } from "expo";
import { SearchBar } from "react-native-elements";
import { View, Row, Title, Caption, Image, Divider } from "@shoutem/ui";

import { searchRecipes, selectResult } from "../store/actions/searchRecipes";

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };

  state = {
    searchTerm: ""
  };

  handleSubmit = () => {
    this.props.searchRecipes(this.state.searchTerm);
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

  renderResults = () => {
    if (this.props.recipes === null) {
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
            OOPS!{"\n"}We don't seem to have a recipe for that.
          </Title>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.recipes}
        keyExtractor={item => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.selectResult(item);
              this.props.navigation.navigate("SelectedSearchResult");
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
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <SearchBar
          placeholder="Search"
          lightTheme
          round
          onChangeText={searchTerm => this.setState({ searchTerm })}
          value={this.state.searchTerm}
          onSubmitEditing={this.handleSubmit}
        />
        {this.renderResults()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.search.recipes
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes, selectResult }
)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
    //padding: 15
  },
  statusBar: {
    height: Constants.statusBarHeight
  },
  badge: {
    backgroundColor: "#DDEEFF",
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 3
  }
});
