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
  })
};

export const searchPokemon = async (pokemonName: string) => {
  const pokemonSearchedURL = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const json = await pokemonSearchedURL.json();
  const pokemonSearched = json;
  return SearchMapper(pokemonSearched);
};

export const SearchMapper = (pokemonSearched: any): any => {
  console.log(pokemonSearched);
  return {
    name: pokemonSearched.name,
    id: pokemonSearched.id,
    type: pokemonSearched.types[0].type.name,
    image: pokemonSearched.sprites.back_default,
    location: "fetchPokemonLocation(pokemon.location_area_encounters)",
  };
};
// export const getPokemonTypes = await fetch("https://pokeapi.co/api/v2/type");
// const types = await getPokemonTypes.json();
export const fetchPokemonByType = async (pokemonType: string) => {
  const pokemonTypeUrl = await fetch(
    `https://pokeapi.co/api/v2/type/${pokemonType}`
  );
  const json = await pokemonTypeUrl.json();
  const pokemonListType = json.pokemon;
  console.log(pokemonListType);
  const pokemonTypeInfo = pokemonListType.map(async (pokemonListType: any) => {
    const pokemonInfo = await fetch(pokemonListType.pokemon.url);
    const json: any[] = await pokemonInfo.json();

    return json;
  });
  console.log(pokemonTypeInfo);
  const pokemonsDTO: PokemonDTO[] = await Promise.all(pokemonTypeInfo);
  console.log(pokemonsDTO);
  return pokemonsMapper(pokemonsDTO);
};
// export const fetchPokemonSort = async (
//   initialSortNumber: number,
//   finalSortNumber: number
// ) => {
//   const promises = [];
//   for (let i = 1; i <= 100; i++) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//     promises.push(fetch(url).then((res) => res.json()));
//   }
//   Promise.all(promises).then((results) => {
//     const pokemon = results
//       .map((result) => ({
//         name: result.name,
//         id: result.id,
//         type: result.types[0].type.name,
//         image: result.sprites.back_default,
//       }))
//       .sort((a, b) => (a.name > b.name ? initialSortNumber : finalSortNumber));
//     console.log(pokemon);
//     return pokemon;
//   });
// };

// //

