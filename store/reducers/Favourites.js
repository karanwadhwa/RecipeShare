import { PERSIST_REHYDRATE } from "redux-persist/lib/constants";

import {
  SET_FAVOURITE_RECIPE,
  SELECT_FAVOURIRE_RECIPE
} from "../actions/types";

initialState = {
  recipes: [],
  selectedRecipe: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PERSIST_REHYDRATE:
      return action.payload.favourites || initialState;
    case SET_FAVOURITE_RECIPE:
      let recipes = [...state.recipes];
      let index = recipes.findIndex(
        recipe => recipe.idMeal === action.payload.idMeal
      );

      if (index !== -1) {
        recipes.splice(index, 1);
        return {
          ...state,
          recipes
        };
      }

      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    case SELECT_FAVOURIRE_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload
      };
    default:
      return state;
  }
};
