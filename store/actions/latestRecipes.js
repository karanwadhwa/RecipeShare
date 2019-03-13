import {
  SET_LATEST_RECIPES,
  SELECT_LATEST_RECIPE,
  SET_LATEST_LOADING,
  SET_LATEST_REFRESHING
} from "./types";
import API from "../../config/api";

export const setLatestLoading = () => {
  return {
    type: SET_LATEST_LOADING
  };
};

export const setLatestRefreshing = () => {
  return {
    type: SET_LATEST_REFRESHING
  };
};

export const fetchLatestRecipes = () => dispatch => {
  dispatch(setLatestLoading());
  dispatch(setLatestRefreshing());

  API.get("/latest.php").then(response => {
    dispatch({
      type: SET_LATEST_RECIPES,
      payload: response.data.meals
    });
  });
};

export const selectLatestRecipe = recipe => {
  return {
    type: SELECT_LATEST_RECIPE,
    payload: recipe
  };
};
