import { useState } from "react";

export default function useSortPokemon(
  setPokemon: any,
  pokemon: any,
  setFilter: any
) {
  const [sort, setSort] = useState<number>(1);
  const searchPokemonBySort = () => {
    if (sort == 1) {
      setSort(-1);
      setPokemon(pokemon.sort((a: any, b: any) => (a.name > b.name ? 1 : -1)));
    } else {
      setSort(1);
      setPokemon(pokemon.sort((a: any, b: any) => (a.name > b.name ? -1 : 1)));
    }
  };

  return {
    pokemon,
    setPokemon,
    setSort,
    searchPokemonBySort,
    setFilter,
  };
}
