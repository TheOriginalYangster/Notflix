import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const buttonClicked = createAction("app/buttonClicked");


// api docs: http://www.omdbapi.com/
export const movieUrl = "https://www.omdbapi.com/?apiKey=16073636&";

const initialMovies = [
  "Johnny Tsunami",
  "Super Troopers",
  "Saving Private Ryan",
  "Cabin In The Woods",
  "Titanic",
  "Dude, Where's My Car?",
  "The Big Lebowski"
]

export const fetchMovies = createAsyncThunk(
  "app",
  async (args, { dispatch }) => {
    try {
      dispatch({ type: "app/pending" });
      
      const movies = await Promise.all(initialMovies.map(movie => (
        fetch(`${movieUrl}t=${movie}`).then(r => r.json())
      )))
      console.log('movies', movies)
      dispatch({ type: "app/fulfilled", payload: movies });
    } catch (e) {
      dispatch({ type: "app/rejected", payload: e.message });
    }
  }
);
