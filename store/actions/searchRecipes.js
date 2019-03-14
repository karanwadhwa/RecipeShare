import { SET_SEARCH_RESULTS, SELECT_SEARCHED_RESULT } from "./types";
import API from "../../config/api";

export const searchRecipes = searchTerm => dispatch => {
  API.get(`/search.php?s=${searchTerm}`).then(response =>
    dispatch({
      type: SET_SEARCH_RESULTS,
      payload: response.data.meals
    })
  );
};

export const selectResult = recipe => {
  return {
    type: SELECT_SEARCHED_RESULT,
    payload: recipe
  };
};
