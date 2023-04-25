import React from "react";
import UseState from "./Components/UseState/UseState";
import UseEffects from "./Components/UseEffects/UseEffects";
import UseContext from "./Components/UseContext/UseContext";
import Navbar from "./Components/Navbar";

const App = () => {
  const newData = {
    name: "Deepak",
    age: 20,
    address: "123 Main St",
  };
  return (
    <>
      <UseContext.Provider value={newData}>
        <Navbar />
        <UseState />
        <UseEffects />
      </UseContext.Provider>
    </>
  );
};

export default App;
