import { AnyAction } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export type AppState = {
  loading: boolean;
  error: boolean;
  data: Record<any, any>[];
  initialMovies: Record<any, any>[];
  searchText: string;
};

export const initialState: AppState = {
  loading: false,
  error: false,
  data: [],
  initialMovies: [],
  searchText: '',
};

export const reducer = (state, action) => {
  const { type, payload } = action
  switch(type){
    case "SEARCH_INPUT_CHANGE":
      return { ...state, searchText: payload }
    case "SEARCH_SUBMIT":
      console.log('NO PAYLOAD BUT:', state.searchText)
      return state
    default:
      return state
  }
} 

// export type AppState = {
//   app: AppStateSlice;
// };

//Too tired to learn this.
// export const appSlice = createSlice({
//   name: "app",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase("app/buttonClicked", (state, action) => {});

//     builder.addCase("app/pending", (state, action) => {});

//     builder.addCase("app/fulfilled", (state, action) => {
//       console.log('state', state)
//       console.log('action', action)
//     });

//     builder.addCase("app/rejected", (state, action) => {});
//   }
// });


