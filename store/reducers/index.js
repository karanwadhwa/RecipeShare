import { combineReducers } from "redux";

import Latest from "./Latest";
import Search from "./Search";
import Random from "./Random";
import Favourites from "./Favourites";

export default combineReducers({
  latest: Latest,
  search: Search,
  random: Random,
  favourites: Favourites
});
