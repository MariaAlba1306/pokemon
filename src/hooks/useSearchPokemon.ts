import { getTwentyPokemons, searchPokemon } from "api/api-service";
import { useState } from "react";

export default function useSearchPokemon(
  setPokemon: any,
  setLoading: (state: boolean) => void,
  setAllPokemons: (state: boolean) => void
) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchPokemonByKeyword = () => {
    if (searchTerm.length > 0) {
      setLoading(true);
      setAllPokemons(false);

      searchPokemon(searchTerm)
        .then((searchedPokemon) => {
          setLoading(false);
          setPokemon(searchedPokemon);
        })
        .catch((error) => {});
    } else {
      let offset = 20;
      getTwentyPokemons(0, offset).then((initialPokemons) => {
        setPokemon(initialPokemons);
        setAllPokemons(true);
      });
    }
  };

  return { setSearchTerm, searchPokemonByKeyword };
}
