import MastHead from "./components/masthead";
import ScrollObserver from "./utils/scroll-observer";
import AboutUs from "./components/about-us";
import Skills from "./components/skills";
import Works from "./components/works";
import "./App.scss";

function App() {
  console.log("hi there");
  return (
    <ScrollObserver>
      <div className="app">
        <MastHead />
        <AboutUs />
        <Skills />
        <Works />
        <div className="box1">500px</div>
        <div className="box2">700px</div>
        <div className="box1">500px</div>
        <div className="box2">700px</div>
        <div>hello</div>
      </div>
    </ScrollObserver>
  );
}

export default App;
