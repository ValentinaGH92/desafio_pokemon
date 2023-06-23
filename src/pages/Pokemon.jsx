import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPokemonNames } from "../services/pokemonService";

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataPokemon = async () => {
      const data = await getPokemonNames();

      setDataPokemon(data);
    };

    getDataPokemon();
  }, []);

  const handlerSelectPokemon = (name) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="container">
      <h1>Pokemon</h1>
      <ListGroup>
        {dataPokemon.map((pokemon, index) => (
          <ListGroup.Item
            key={index}
            onClick={() => handlerSelectPokemon(pokemon.name)}
          >
            {pokemon.name}{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Pokemon;
