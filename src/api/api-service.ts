import { PokemonDTO, Pokemon, PokemonListDTO } from "./pokemon-dto";

const BASE_URL = "https://pokeapi.co/api/v2";
export const getTwentyPokemons = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  const url = `${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`;
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

export const pokemonsMapper = (pokemonsDTO: PokemonDTO[]) => {
  return pokemonsDTO.map((pokemon: PokemonDTO) => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      type: pokemon.types[0].type.name,
      image: pokemon.sprites.back_default,
    };
  });
};

export const searchPokemon = async (pokemonName: string) => {
  const pokemonSearchedURL = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
  const json = await pokemonSearchedURL.json();
  const pokemonSearched = json;
  return SearchMapper(pokemonSearched);
};

export const SearchMapper = (pokemonSearched: any): object[] => {
  return [
    {
      name: pokemonSearched.name,
      id: pokemonSearched.id,
      type: pokemonSearched.types[0].type.name,
      image: pokemonSearched.sprites.back_default,
      location: "fetchPokemonLocation(pokemon.location_area_encounters)",
    },
  ];
};

export const filterPokemonByType = async (pokemonType: string) => {
  const pokemonTypeUrl = await fetch(`${BASE_URL}/type/${pokemonType}`);
  const json = await pokemonTypeUrl.json();
  const pokemonListType = json.pokemon;

  const pokemonTypeInfo = pokemonListType.map(async (pokemonListType: any) => {
    const pokemonInfo = await fetch(pokemonListType.pokemon.url);
    const json: any[] = await pokemonInfo.json();
    return json;
  });
  const pokemonsDTO: PokemonDTO[] = await Promise.all(pokemonTypeInfo);
  return pokemonsMapper(pokemonsDTO);
};
