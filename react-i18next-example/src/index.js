import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import TestUseTranslation from "./TestUseTranslation";
import "./index.css";
import "./i18n";

class App extends React.Component {
  render() {
    return <TestUseTranslation />;
  }
}

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("root")
);
