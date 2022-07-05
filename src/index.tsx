import React from "react";
import ReactDOM from "react-dom/client";
import Ahihi from "./App";
import ScrollObserver from "./utils/scroll-observer";
import SizeObserver from "./utils/size-observer";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <SizeObserver>
        <Ahihi />
      </SizeObserver>
    </ScrollObserver>
  </React.StrictMode>
);
