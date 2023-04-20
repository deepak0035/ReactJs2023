import React, { useState, useEffect, useContext } from "react";
let rNum = 0;

const UseEffects = () => {
  const [ranNum, setranNum] = useState(rNum);
  console.log(ranNum);
  useEffect(() => {
    document.title = ranNum;
  });
  const changeTitle = () => {
    rNum = Math.floor(Math.random() * 100);
    setranNum(rNum);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary item-center d-flex justify-content-center"
          onClick={changeTitle}
        >
          Click to change the title
        </button>
      </div>
    </>
  );
};

export default UseEffects;
