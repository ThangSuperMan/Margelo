import React from "react";
import MastHead from "./components/masthead";
import ScrollObserver from "./utils/scroll-observer";
import AboutUs from "./components/about-us";
import Skills from "./components/skills";
import "./App.scss";

function App() {
  return (
    <ScrollObserver>
      <div className="app">
        <MastHead />
        <AboutUs />
        <Skills />
        <div className="box1">500px</div>
        <div className="box2">700px</div>
        <div className="box1">500px</div>
        <div className="box2">700px</div>
      </div>
    </ScrollObserver>
  );
}

export default App;
