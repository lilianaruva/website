import React from "react";
//Global Styled
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";
import ContacUs from "./pages/ContacUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Import nav comp
import Nav from "./components/Nav";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContacUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
