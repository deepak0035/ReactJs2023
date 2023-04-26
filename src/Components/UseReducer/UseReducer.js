import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action)
{
    if (action.type === "increment") {
        return { count: state.count + 1 };
    }
    if (action.type === "decrement") {
        return { count: state.count - 1 };
    }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default UseReducer;
