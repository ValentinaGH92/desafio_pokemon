import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPokemonDetails } from "../services/pokemonService";
import CardPokemon from "../components/CardPokemon";

const PokemonDetails = () => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const params = useParams();
  const pokemonName = params.name;

  useEffect(() => {
    const getPokemonData = async () => {
      const data = await getPokemonDetails(pokemonName);

      setCurrentPokemon(data);
    };

    getPokemonData();
  }, [pokemonName]);

  return (
    <div className="containter">
      <h1>Detalle de {params.name}</h1>
      <CardPokemon
        imagePokemon={currentPokemon.image}
        title={currentPokemon.name}
        stats={currentPokemon.stats}
      />
    </div>
  );
};

export default PokemonDetails;
