import Nav from "./components/nav/nav";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>
     
    </div>
  );
}

export default App;
