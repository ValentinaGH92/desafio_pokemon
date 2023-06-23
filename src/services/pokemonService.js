const getPokemonNames = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

  if (response.status === 200) {
    const data = await response.json();

    return data.results;
  }

  return null;
};

const getPokemonDetails = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (response.status === 200) {
    const data = await response.json();

    return {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      stats: data.stats,
    };
  }

  return null;
};

export { getPokemonDetails, getPokemonNames };
