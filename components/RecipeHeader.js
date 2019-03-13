import React, { Component } from "react";
import { FlatList, StyleSheet, Linking } from "react-native";
import {
  View,
  Caption,
  Image,
  ImageBackground,
  Overlay,
  Subtitle,
  Heading,
  TouchableOpacity
} from "@shoutem/ui";

class RecipeHeader extends Component {
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
        </View>

        <View
          styleName="horizontal"
          style={{ padding: 15, alignItems: "center" }}
        >
          <Subtitle style={{ paddingRight: 10 }}>Tags:</Subtitle>
          <FlatList
            horizontal
            //contentContainerS
            data={recipe.strTags.split(",")}
            renderItem={({ item }) => (
              <Caption style={styles.audienceBadge}>{item}</Caption>
            )}
            keyExtractor={item => item}
          />
        </View>
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
