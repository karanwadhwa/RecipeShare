import {
  SET_LATEST_RECIPES,
  SELECT_LATEST_RECIPE,
  SET_LATEST_LOADING,
  SET_LATEST_REFRESHING
} from "../actions/types";

initialState = {
  recipes: [],
  selectedRecipe: null,
  loading: true,
  refreshing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LATEST_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_LATEST_REFRESHING:
      return {
        ...state,
        refreshing: true
      };
    case SET_LATEST_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        refreshing: false
      };
    default:
      return state;
  }
};
