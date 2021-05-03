import React from "react";
//Global Styled
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";
import ContacUs from "./pages/ContacUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContacUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
