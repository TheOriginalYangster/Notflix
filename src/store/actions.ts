import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const buttonClicked = createAction("app/buttonClicked");

// api docs: http://www.omdbapi.com/
export const movieUrl = "https://www.omdbapi.com/?apiKey=16073636&s=";

export const fetchMovies = createAsyncThunk(
  "app",
  async (args, { dispatch }) => {
    try {
      dispatch({ type: "app/pending" });
      // put your fetch logic here
      // use the dispatch method from arguments
      // You can use native fetch from browser
      // or axios which is installed as a dependency

      dispatch({ type: "app/fulfilled", payload: {} });
    } catch (e) {
      dispatch({ type: "app/rejected", payload: e.message });
    }
  }
);
