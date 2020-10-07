import * as React from "react";
import { useSelector } from "react-redux";
import { AppStateSlice } from "../store/reducer";

import { Button } from "./Button";
import { AppState } from "../store/reducer";

export function App() {
  const state = useSelector<AppState, AppStateSlice>((state) => state.app);
  console.log(state);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button />
    </div>
  );
}
