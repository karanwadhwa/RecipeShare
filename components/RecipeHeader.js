import React, { Component } from "react";
import { FlatList, TouchableOpacity, StyleSheet, Linking } from "react-native";
import {
  View,
  Caption,
  Image,
  ImageBackground,
  Overlay,
  Subtitle,
  Heading
} from "@shoutem/ui";

import Icon from "@expo/vector-icons/Ionicons";

class RecipeHeader extends Component {
  renderTags = tags => {
    return (
      <View styleName="horizontal space-between" style={{ padding: 15 }}>
        {tags !== null ? (
          <React.Fragment>
            <Subtitle style={{ paddingRight: 10 }}>Tags:</Subtitle>
            <FlatList
              horizontal
              data={tags.split(",")}
              renderItem={({ item }) => (
                <Caption style={styles.audienceBadge}>{item}</Caption>
              )}
              keyExtractor={item => item}
            />
          </React.Fragment>
        ) : (
          <View />
        )}

        <TouchableOpacity>
          <Icon name="ios-star" size={24} color="#107AFB" />
        </TouchableOpacity>
      </View>
    );
  };

  renderYoutube = recipe => {
    if (recipe.strYoutube !== "") {
      return (
        <TouchableOpacity onPress={() => Linking.openURL(recipe.strYoutube)}>
          <Image
            style={{ height: 30 }}
            styleName="small"
            source={{
              uri:
                "https://seeklogo.net/wp-content/uploads/2017/08/youtube-logo.png"
            }}
          />
        </TouchableOpacity>
      );
    }
  };

  render() {
    const { recipe } = this.props;

    return (
      <View>
        <ImageBackground
          styleName="large-wide"
          source={{ uri: recipe.strMealThumb }}
        >
          <Overlay styleName="fill-parent image-overlay">
            <Heading styleName="sm-gutter-horizontal" style={{ width: "75%" }}>
              {recipe.strMeal.toUpperCase()}
            </Heading>
          </Overlay>
        </ImageBackground>
        <View
          styleName="horizontal space-between v-center"
          style={{
            paddingHorizontal: 15,
            paddingTop: 10
          }}
        >
          <Subtitle style={{ color: "#777" }}>
            {recipe.strCategory}, {recipe.strArea}
          </Subtitle>
          {this.renderYoutube(recipe)}
        </View>

        {this.renderTags(recipe.strTags)}
      </View>
    );
  }
}

export default RecipeHeader;

const styles = StyleSheet.create({
  audienceBadge: {
    backgroundColor: "#DDEEFF",
    marginRight: 5,
    paddingHorizontal: 3
  }
});
