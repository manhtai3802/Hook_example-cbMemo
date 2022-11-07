import { useReducer } from "react";

const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  console.log("render run");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>

      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}

export default Reducer;
