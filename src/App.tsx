import React from "react";
import MastHead from "./components/masthead";
import ScrollObserver from "./utils/scroll-observer";
import "./App.scss";
import AboutUs from "./components/about-us";

function App() {
  console.log("hi there");

  return (
    <ScrollObserver>
      <div className="app">
        <MastHead />
        <AboutUs />
        <div className="box1">500px</div>
        <div className="box2">700px</div>
        <div className="box1">500px</div>
        <div className="box2">700px</div>
      </div>
    </ScrollObserver>
  );
}

export default App;
