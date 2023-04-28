import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="container input-group mb-3">
        <input
          type="text"
          className="form-control"
          ref={inputRef}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary "
          onClick={handleClick}
          type="button"
          id="button-addon2"
        >
          Focus Input
        </button>
      </div>
    </>
  );
}

export default UseRef;
