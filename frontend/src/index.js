import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const Application = () => {
  return <App isServerInfo />;
};

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,
  document.getElementById("root"),
);





