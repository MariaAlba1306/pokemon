import { filterPokemonByType, getTwentyPokemons } from "api/api-service";
import { useState } from "react";

export default function useTypePokemon(setPokemon: any) {
  const [type, setType] = useState<string>("All");
  const searchPokemonByType = () => {
    if (type == "All") {
      getTwentyPokemons(0, 20).then((initialPokemons) => {
        setPokemon(initialPokemons);
      });
    } else {
      filterPokemonByType(type).then((typedPokemon) => {
        setPokemon(typedPokemon);
      });
    }
  };

  return { setType, searchPokemonByType, type };
}
