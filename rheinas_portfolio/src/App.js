import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Work from "./views/Work";
import Contact from "./views/Contact";
function App() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
