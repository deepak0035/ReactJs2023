import React, { Fragment, useState } from "react";
import UseState from "./Components/UseState/UseState";
import UseEffects from "./Components/UseEffects/UseEffects";
import UseContext from "./Components/UseContext/UseContext";

const App = () => {
  const newData = {
    name: "Deepak",
    age: 20,
    address: "123 Main St",
  }
  return (
    <>
      <UseContext.Provider value={newData}>
        <UseState />
        <UseEffects />
      </UseContext.Provider>
    </>
  );
};

export default App;
