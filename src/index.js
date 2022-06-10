import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <App />,
    document.querySelector(".root")
  );
}

document.addEventListener("DOMContentLoaded", main);
