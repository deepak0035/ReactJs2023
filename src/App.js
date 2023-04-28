import React from "react";
import UseState from "./Components/UseState/UseState";
import UseEffects from "./Components/UseEffects/UseEffects";
import UseContext from "./Components/UseContext/UseContext";
import UseReducer from "./Components/UseReducer/UseReducer";
import UseRef from "./Components/UseRef/UseRef";
import UseLayoutEffect from "./Components/UseLayoutEffect/UseLayoutEffect";
import UseCallback from "./Components/UseCallBack/UseCallback";
import UseMemo from "./Components/UseMemo/UseMemo";
import UseImperativeParent from "./Components/UseImperative/UseImperativeParent";
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
        <UseReducer />
        <UseRef />
        <UseLayoutEffect />
        <UseMemo />
        <UseCallback />
        <UseImperativeParent />
      </UseContext.Provider>
    </>
  );
};

export default App;
