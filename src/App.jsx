import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";

import AppRputes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPokemon from "./components/NavbarPokemon";

function App() {
  return (
    <Router>
      <NavbarPokemon />
      <AppRputes />
    </Router>
  );
}

export default App;
