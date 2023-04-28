import "./App.scss";
import { useRef, useState, KeyboardEvent, useEffect } from "react";
import Header from "./features/component/header/header";
import MainTitle from "features/component/main-title/main-title";
import ContentOptions from "features/component/content-options/content-options";
import List from "features/component/list/list";
import FavoritesModal from "features/component/modal/favorites-modal";
import usePokemon from "hooks/usePokemon";
import Searchbox from "features/shared/searchbox/searchbox";
import { getTwentyPokemons } from "api/api-service";
import Card from "features/shared/card/card";
import UseSearchPokemon from "hooks/useSearchPokemon";
import Filter from "features/shared/filter/filter";
import Sort from "features/shared/sort/sort";
import { InView } from "react-intersection-observer";

function App() {
  const { pokemon, setPokemon, loading } = usePokemon();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pokemonNumber, setPokemonNumber] = useState(0);
  let searchedValue = "";

  function toggle(): void {
    setShouldShowModal(!shouldShowModal);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  const onChange = (e: any) => {
    searchedValue = e.target.value.toLowerCase();
    if (searchedValue == "") {
      UseSearchPokemon(searchedValue, setPokemon);
    }
  };

  const onKeyDown = async (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter") {
      UseSearchPokemon(searchedValue, setPokemon);
    }
  };
  const LoadMorePokemons = () => {
    setPokemonNumber((pokemonNumber) => pokemonNumber + 20);
    getTwentyPokemons(0, pokemonNumber).then((initialPokemons) => {
      setPokemon(initialPokemons);
    });
  };

  return (
    <div className="App">
      <Header toggleModal={toggle} />
      <MainTitle />
      <ContentOptions>
        <Searchbox
          mode="dark"
          className="Searchbox__input"
          size="small"
          type="search"
          placeholder="Search Pokemons"
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="ContentOptions__right">
          <Filter />
          <Sort />
        </div>
      </ContentOptions>
      {/* {if (error) <Error />} */}
      <List>
        {!pokemon.length ? (
          <Card data={pokemon} />
        ) : (
          pokemon.map((pokemonInfo: any, i) => {
            return <Card data={pokemonInfo} key={`${pokemonInfo.name}-${i}`} />;
          })
        )}
        {pokemon.length ? (
          <InView
            onChange={(inView) => {
              LoadMorePokemons();
            }}
          ></InView>
        ) : null}
      </List>
      {shouldShowModal ? <FavoritesModal toggleModal={toggle} /> : null}
      <div className="isVisible"></div>
    </div>
  );
}

export default App;
