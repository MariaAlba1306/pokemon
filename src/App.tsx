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
import UseTypePokemon from "hooks/useTypePokemon";
interface StateProperties {
  id: string;
  name: number;
}

function App() {
  const { pokemon, setPokemon, loading } = usePokemon();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pokemonNumber, setPokemonNumber] = useState(20);
  const [option, setSelects] = useState("");
  const [favorites, setFavorites] = useState<StateProperties[]>([]);

  let searchedValue = "";
  let valueType = "";

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
    console.log("ha");
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
  const onChangeFilter = (type: any) => {
    UseTypePokemon(type.target.value, setPokemon);
  };

  const addFavorite = (pokemonFav: any) => {
    if (favorites.includes(pokemonFav)) {
      setFavorites(favorites.filter((a) => a.id !== pokemonFav.id));
      console.log(favorites);
    } else {
      setFavorites([...favorites, pokemonFav]);

      console.log(favorites);
    }
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
        <div className="ContentOptions--right">
          <Filter onChangeFilter={onChangeFilter} />
          <Sort setPokemon={setPokemon} />
        </div>
      </ContentOptions>
      {/* {if (error) <Error />} */}
      <List>
        {!pokemon.length ? (
          <Card
            data={pokemon}
            key={`${pokemon}`}
            onClick={() => addFavorite(pokemon)}
          />
        ) : (
          pokemon.map((pokemonInfo: any, i) => {
            return (
              <Card
                data={pokemonInfo}
                key={`${pokemonInfo.id}`}
                onClick={() => addFavorite(pokemonInfo)}
              />
            );
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
      {shouldShowModal ? (
        <FavoritesModal toggleModal={toggle}>
          {favorites.map((data: any) => {
            return <Card data={data} />;
          })}
        </FavoritesModal>
      ) : null}
      <div className="isVisible"></div>
    </div>
  );
}

export default App;
