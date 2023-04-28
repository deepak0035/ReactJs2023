import React, { forwardRef, useImperativeHandle } from "react";

const UseImperativeChild = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      ranNum: () => sayHi(),
    };
  });

  const sayHi = () => {
    let rNum = Math.floor(Math.random() * 100);
    alert(rNum);
  };

  return <></>;
};

export default forwardRef(UseImperativeChild);
