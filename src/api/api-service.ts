import { PokemonDTO, Pokemon, PokemonListDTO } from "./pokemon-dto";
export const getTwentyPokemons = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const result = await fetch(url);
  const json = await result.json();
  const pokemonList = json.results;

  const pokemonInfo = pokemonList.map(async (pokemonList: PokemonListDTO) => {
    const pokemonInfo = await fetch(pokemonList.url);
    const json: PokemonDTO[] = await pokemonInfo.json();

    return json;
  });

  const pokemonsDTO: PokemonDTO[] = await Promise.all(pokemonInfo);
  return pokemonsMapper(pokemonsDTO);
};

export const pokemonsMapper = async (pokemonsDTO: PokemonDTO[]) => {
  return pokemonsDTO.map((pokemon: PokemonDTO) => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      type: pokemon.types[0].type.name,
      image: pokemon.sprites.back_default,
      location: "fetchPokemonLocation(pokemon.location_area_encounters)",
    };
  });
};

export const searchPokemon = async (pokemonName: string) => {
  const pokemonSearchedURL = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const json = await pokemonSearchedURL.json();
  const pokemonSearched = json;
  return mapper(pokemonSearched);
};

export const mapper = (pokemonSearched: any): any => {
  console.log(pokemonSearched);
  return {
    name: pokemonSearched.name,
    id: pokemonSearched.id,
    type: pokemonSearched.types[0].type.name,
    image: pokemonSearched.sprites.back_default,
    location: "fetchPokemonLocation(pokemon.location_area_encounters)",
  };
};
