import { fetchPokemonByType, getTwentyPokemons } from "api/api-service";

export default async function UseTypePokemon(type: string, setPokemon: any) {
  if (type == "All") {
    let offset = 20;
    getTwentyPokemons(0, offset).then((initialPokemons) => {
      setPokemon(initialPokemons);
    });
  } else {
    fetchPokemonByType(type).then((typedPokemon) => {
      setPokemon(typedPokemon);
    });
  }
  

  return { setPokemon };
}
