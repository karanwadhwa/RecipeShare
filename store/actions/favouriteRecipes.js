import { SET_FAVOURITE_RECIPE, SELECT_FAVOURIRE_RECIPE } from "./types";

export const setFavRecipe = recipe => {
  return {
    type: SET_FAVOURITE_RECIPE,
    payload: recipe
  };
};

export const selectFavRecipe = recipe => {
  return {
    type: SELECT_FAVOURIRE_RECIPE,
    payload: recipe
  };
};
