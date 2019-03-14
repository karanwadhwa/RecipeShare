import { SET_SEARCH_RESULTS, SELECT_SEARCHED_RESULT } from "../actions/types";

initialState = {
  recipes: [],
  selectedRecipe: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        recipes: action.payload
      };
    case SELECT_SEARCHED_RESULT:
      return {
        ...state,
        selectedRecipe: action.payload
      };
    default:
      return state;
  }
};
