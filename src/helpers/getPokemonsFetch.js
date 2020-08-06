
export const getPokemonsFetch = async (offset, limit = 20) => {
  const urlPokemons = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const respPokemons = await fetch(urlPokemons);

  const { results, count } = await respPokemons.json();

  const pokemons = results.map(async (pokemon) => {
    const urlPokemon = pokemon.url;
    const resPokemon = await fetch(urlPokemon);

    const { name, height, weight, types, abilities, sprites } = await resPokemon.json();

    return {
      name,
      height,
      weight,
      types,
      abilities,
      sprites
    }
  });

  return ({
    count,
    pokemons: await Promise.all(pokemons)
  });
}