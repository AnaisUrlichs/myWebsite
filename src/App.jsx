import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
