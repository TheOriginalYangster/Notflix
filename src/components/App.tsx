import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import { Dispatch } from "redux";


import { AppStateSlice, AppState } from "../store/reducer";
import { fetchMovies } from "../store/actions";

import { Button } from "./common/Button";
import AppRoutes from "../routes/AppRoutes";
import Header from "./layout/Header/Header"

export function App() {
  const state = useSelector<AppState, AppStateSlice>((state) => state.app);

  useEffect(() => {
    console.log('app mounted')
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="product-space">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}
