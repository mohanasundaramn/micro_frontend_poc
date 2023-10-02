import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount func to startup the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Call immediatly -> If we are in development or in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-root");

  if (el) {
    mount(el);
  }
}

// Export mount -> when running through container

export { mount };
