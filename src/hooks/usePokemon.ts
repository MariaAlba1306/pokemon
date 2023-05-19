import { useEffect, useState } from "react";
import { getTwentyPokemons } from "api/api-service";

export default function usePokemon() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allPokemons, setAllPokemons] = useState(true);

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
  };
}
