import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const inputChanged = createAction<string>("SEARCH_INPUT_CHANGE");

//I understand these aren't really going anywhere.
export const searchSent = createAction("SEARCH_SENT")
export const dataRecieved = createAction<Array<any>>("DATA_RECIEVED");
export const badSearch = createAction("BAD_SEARCH")
export const buttonClicked = createAction("app/buttonClicked");
export const addToCarousel = createAction<any>("ADD_TO_CAROUSEL")

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
    if(Response === "True") {
      //WHY NOT SEND A BOOLEAN??????  THIS IS WHY YOU NEED TYPESCRIPT I GUESS
      //I built the card components with specific title query results, and don't have access to all the data for the component from basic searches.....................
      //So, i'm just going to send a query for all the data for each result, since it's pretty late.
      console.log('results', results)
      const secondResponse = await Promise.all(results.map(({ Title, Year }) => fetch(`${movieUrl}&t=${Title}&y=${Year}`).then(r => r.json())))
      const finalResults = secondResponse.filter((mov: any) => mov.Response === "True")

      console.log('res2', finalResults)
      dispatch(dataRecieved(finalResults))

      //this is silly but I want to do it
      const bestResult: any = finalResults[0]
      const { Title } = bestResult
      const { carouselMovies } = state
      const shouldAdd = !carouselMovies.some(movie => movie.Title === bestResult.Title)
      if(shouldAdd) dispatch(addToCarousel(bestResult))

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
