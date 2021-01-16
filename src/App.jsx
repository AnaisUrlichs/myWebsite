import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/CustomNavbar";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div>
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

      <CookieConsent
        location="bottom"
        buttonText="Sure!"
        cookieName="CookieMonster"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#fff", backgroundColor: "#6b0000", fontSize: "20px" }}
        expires={450}
      >
      This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
}

export default App;
