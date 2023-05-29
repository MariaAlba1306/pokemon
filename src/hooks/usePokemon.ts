import { useEffect, useState } from "react";
import { getTwentyPokemons } from "api/api-service";

export default function usePokemon() {
  const [pokemon, setPokemon] = useState<any[]>([]);
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
