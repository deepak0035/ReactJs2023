import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UseContext, TryContext } from "./Components/UseContext/UseContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    <TryContext>
      <App />
    </TryContext>
  </>,
  document.getElementById("root")
);
