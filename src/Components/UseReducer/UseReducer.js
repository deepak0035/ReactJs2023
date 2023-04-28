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
    <div className="container text-center my-3">
      <h1>Count: {state.count}</h1>
      <div className="container">
        <button
          className="btn btn-primary mx-1"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
