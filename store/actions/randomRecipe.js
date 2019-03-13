import { FETCH_RANDOM_RECIPE } from "./types";
import API from "../../config/api";

export const fetchRandomRecipe = () => dispatch => {
  API.get("/random.php").then(response =>
    dispatch({
      type: FETCH_RANDOM_RECIPE,
      payload: response.data.meals
    })
  );
};
