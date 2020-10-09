import * as React from "react";
import { initialState, reducer } from "./reducer";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";

const defaultMiddleware = getDefaultMiddleware({ thunk: true });

export const createStore = () => {
  const store = configureStore({
    reducer,
    middleware: defaultMiddleware,
    preloadedState: {
      ...initialState
    }
  });
  
  return store;
};

// export const reducer = combineReducers({
//   app: appSlice.reducer
// });