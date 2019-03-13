import { FETCH_RANDOM_RECIPE } from "../actions/types";

initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_RECIPE:
      return action.payload;

    default:
      return state;
  }
};
