import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import PokemonDetails from "../pages/PokemonDetails";

const AppRputes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
    </Routes>
  );
};

export default AppRputes;
