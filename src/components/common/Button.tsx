import * as React from "react";
import { useDispatch } from "react-redux";
import { buttonClicked } from "../../store/actions";

export function Button() {
  const dispatch = useDispatch();
  const onClick = () => dispatch(buttonClicked());

  return <button onClick={onClick}>Get a movie</button>;
}
