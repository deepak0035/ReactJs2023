import React, { useRef, useImperativeHandle } from "react";
import UseImperativeChild from "./UseImperativeChild";

const UseImperativeParent = () => {
  const nRef = useRef(null);

  const handleClick = () => {
    nRef.current.ranNum();
  };

  return (
    <>
      <div className="container text-center">
        <UseImperativeChild ref={nRef} />
        <button onClick={handleClick} className="btn btn-primary my-3">
          buton for UseImperative
        </button>
      </div>
    </>
  );
};

export default UseImperativeParent;
