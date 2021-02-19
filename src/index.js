import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

WebFont.load({
  google: {
    families: ["sans-serif", "Libre Franklin", "Roboto"],
  },
});

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
