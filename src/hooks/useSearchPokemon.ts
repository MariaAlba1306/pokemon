import { getTwentyPokemons, searchPokemon } from "api/api-service";
import { useState } from "react";

export default function useSearchPokemon(setPokemon: any, setLoading: (state: boolean) => void) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchPokemonByKeyword = () => {
    if (searchTerm.length > 0) {
      setLoading(true);
      searchPokemon(searchTerm)
        .then((searchedPokemon) => {
          setPokemon(searchedPokemon);
          setLoading(false);
        })
        .catch((error) => {});
    } else {
      let offset = 20;
      getTwentyPokemons(0, offset).then((initialPokemons) => {
        setPokemon(initialPokemons);
      });
    }
  };

  return { setSearchTerm, searchPokemonByKeyword };
}
