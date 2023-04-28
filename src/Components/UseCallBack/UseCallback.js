import React, { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="container text-center">
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={handleClick}>Click me for Callback hook</button>
    </div>
  );
}


export default UseCallback;
