import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar />
          <Route exact path="/" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Work} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
