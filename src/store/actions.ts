import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const inputChanged = createAction<string>("SEARCH_INPUT_CHANGE");
export const searchSent = createAction("SEARCH_SENT")
export const dataRecieved = createAction<Array<any>>("DATA_RECIEVED");
export const badSearch = createAction("BAD_SEARCH")
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

export const submitSearch = () => {
  return async (dispatch, getState) => {
    const state = getState()
    dispatch(searchSent())
    const res = await fetch(`${movieUrl}&s=${state.searchText}`)
    const x = await res.json()
    console.log('x', x)
    const { Response, Search: results } = x
    if(Response) {
      //I built the card components with specific title query results, and don't have access to all the data for the component.....................
      //So, i'm just going to send a query for all the data for each result, since it's pretty late.
      console.log('results', results)
      const finalResults = await Promise.all(results.map(({ Title }) => fetch(`${movieUrl}&t=${Title}`).then(r => r.json())))
      console.log('res2', finalResults)
      dispatch(dataRecieved(finalResults))
    }
    else dispatch(badSearch())
  }
}

// export const fetchMovies = createAsyncThunk(
//   "app",
//   async (args, { dispatch }) => {
//     try {
//       dispatch({ type: "app/pending" });
      
//       const movies = await Promise.all(initialMovies.map(movie => (
//         fetch(`${movieUrl}t=${movie}`).then(r => r.json())
//       )))
//       console.log('movies', movies)
//       dispatch({ type: "app/fulfilled", payload: movies });
//     } catch (e) {
//       dispatch({ type: "app/rejected", payload: e.message });
//     }
//   }
// );
