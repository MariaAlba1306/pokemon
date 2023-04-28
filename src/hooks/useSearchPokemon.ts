import { getTwentyPokemons, searchPokemon } from "api/api-service";
import { useState } from "react";

export default function UseSearchPokemon(keyword: string, setPokemon: any) {
  if (keyword.length > 0) {
    searchPokemon(keyword).then((searchedPokemon) => {
      setPokemon(searchedPokemon);
      console.log("pokemon", searchedPokemon);
    });
  } else {
    let offset = 20;
    getTwentyPokemons(0, offset).then((initialPokemons) => {
      setPokemon(initialPokemons);
    });
  }

  return { setPokemon };
}
