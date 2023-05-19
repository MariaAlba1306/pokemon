
import {
  fetchPokemonByType,
  fetchPokemonSort,
  // fetchPokemonSort,
  getTwentyPokemons,
} from "api/api-service";

export default async function UseSortPokemon(
  initialSortNumber: any,
  finalSortNumber: any,
  setPokemon: any,
) {
  // fetchPokemonSort(-1,1).then((sortedPokemon) => {
  //   setPokemon(sortedPokemon);
  //   console.log("pokemonn", sortedPokemon);
  // });

  return { setPokemon };
}
