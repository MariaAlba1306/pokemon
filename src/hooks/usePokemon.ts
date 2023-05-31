import { ReactPropTypes, useEffect, useState } from "react";
import { getTwentyPokemons } from "api/api-service";

export default function usePokemon(): {
  pokemon: object[];
  setPokemon: React.Dispatch<React.SetStateAction<object[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  allPokemons: boolean;
  setAllPokemons: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
} {
  const [pokemon, setPokemon] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [allPokemons, setAllPokemons] = useState<boolean>(true);
  useEffect(() => {
    let offset = 20;
    getTwentyPokemons(0, offset)
      .then((initialPokemons) => {
        setPokemon(initialPokemons);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setAllPokemons(false);
      });
  }, []);

  return {
    pokemon,
    setPokemon,
    loading,
    setLoading,
    error,
    allPokemons,
    setAllPokemons,
    setError,
  };
}
