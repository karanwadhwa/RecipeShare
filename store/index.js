import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";

import rootReducer from "./reducers";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const reduxPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favourites"]
};

const reducer = persistCombineReducers(reduxPersistConfig, rootReducer);
/* 
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    autoRehydrate()
  )
);
 */

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  const persistor = persistStore(store);
  return { persistor, store };
}
