import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/CustomNavbar";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Work} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
