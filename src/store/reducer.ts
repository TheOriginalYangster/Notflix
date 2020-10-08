import { AnyAction } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export type AppStateSlice = {
  loading: boolean;
  error: boolean;
  data: Record<any, any>[];
  initialMovies: Record<any, any>[];
};

export type AppState = {
  app: AppStateSlice;
};

export const initialState: AppStateSlice = {
  loading: false,
  error: false,
  data: [],
  initialMovies: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("app/buttonClicked", (state, action) => {
      console.log("go fetch some data");
    });
    builder.addCase("app/pending", (state, action) => {});

    builder.addCase("app/fulfilled", (state, action) => {
      console.log('state', state)
      console.log('action', action)
    });

    builder.addCase("app/rejected", (state, action) => {});
  }
});


