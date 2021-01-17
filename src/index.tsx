import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept();
}
