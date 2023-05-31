import { getTwentyPokemons, searchPokemon } from "api/api-service";
import { useState } from "react";

export default function useSearchPokemon(
  setPokemon: React.Dispatch<React.SetStateAction<object[]>>,
  setLoading: (state: boolean) => void,
  setAllPokemons: (state: boolean) => void,
  setError: (state: boolean) => void
): {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchPokemonByKeyword: () => void;
} {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchPokemonByKeyword = (): void => {
    if (searchTerm.length > 0) {
      setLoading(true);
      setAllPokemons(false);
      searchPokemon(searchTerm)
        .then((searchedPokemon) => {
          setLoading(false);
          setPokemon(searchedPokemon);
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      let offset = 20;
      getTwentyPokemons(0, offset).then((initialPokemons) => {
        setPokemon(initialPokemons);
        setAllPokemons(true);
      });
      setError(false);
    }
  };

  return { setSearchTerm, searchPokemonByKeyword };
}
