import React, { useState, useMemo } from "react";

function Example() {
  const [number, setNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const memoizedResult = useMemo(() => {
    console.log("Calculating new result...");
    return number * multiplier;
  }, [number, multiplier]);

  function handleNumberChange(event) {
    setNumber(Number(event.target.value));
  }

  function handleMultiplierChange(event) {
    setMultiplier(Number(event.target.value));
  }

  return (
    <div className="container">
      <label>
        Number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <br />
      <label>
        Multiplier:
        <input
          type="number"
          value={multiplier}
          onChange={handleMultiplierChange}
        />
      </label>
      <br />
      <p>The result is {memoizedResult}.</p>
    </div>
  );
}

export default Example;
