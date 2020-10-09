import { AnyAction } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import initialMovies from '../static/initialMovies.json'
import shuffle from 'shuffle-array'

export type AppState = {
  loading: boolean;
  error: boolean;
  data: Record<any, any>[];
  carouselMovies: Record<any, any>[];
  searchText: string;
};

export const initialState: AppState = {
  loading: false,
  error: false,
  data: [],
  carouselMovies: initialMovies,
  searchText: '',
};

export const reducer = (state, action) => {
  const { type, payload } = action
  switch(type){
    case "SEARCH_INPUT_CHANGE":
      return { ...state, searchText: payload }
    case "SEARCH_SENT":
      return { ...state, error: false, data: [] }
    case "DATA_RECIEVED":
      return { ...state, data: payload }
    case "BAD_SEARCH":
      return { ...state, error: true, data: [] }
    case "ADD_TO_CAROUSEL":
      return { ...state, carouselMovies: shuffle([...state.carouselMovies, payload])}
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


