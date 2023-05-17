import "./App.scss";
import { useRef, useState, KeyboardEvent, useEffect, ChangeEvent } from "react";
import Header from "./features/component/header/header";
import MainTitle from "features/component/main-title/main-title";
import ContentOptions from "features/component/content-options/content-options";
import List from "features/component/list/list";
import FavoritesModal from "features/component/modal/favorites-modal";
import usePokemon from "hooks/usePokemon";
import Searchbox from "features/shared/searchbox/searchbox";
import { getTwentyPokemons } from "api/api-service";
import Card from "features/shared/card/card";
import useSearchPokemon from "hooks/useSearchPokemon";
import Filter from "features/shared/filter/filter";
import Sort from "features/shared/sort/sort";
import { InView } from "react-intersection-observer";
import UseTypePokemon from "hooks/useTypePokemon";
import { Pokemon } from "api/pokemon-dto";

function App() {
  const { pokemon, setPokemon, loading, setLoading } = usePokemon();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pokemonNumber, setPokemonNumber] = useState(20);
  const [option, setSelects] = useState("");
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const { setSearchTerm, searchPokemonByKeyword } = useSearchPokemon(
    setPokemon,
    setLoading
  );

  function toggle(): void {
    setShouldShowModal(!shouldShowModal);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  const LoadMorePokemons = () => {
    setPokemonNumber((pokemonNumber) => pokemonNumber + 20);
    getTwentyPokemons(0, pokemonNumber).then((initialPokemons) => {
      setPokemon(initialPokemons);
    });
  };

  const onChangeFilter = (type: any) => {
    UseTypePokemon(type.target.value, setPokemon);
  };

  const updateFavorites = (pokemonInfo: Pokemon) => {
    if (isFav(pokemonInfo.id, favorites)) {
      setFavorites(
        favorites.filter((favorite) => favorite.id !== pokemonInfo.id)
      );
    } else {
      setFavorites([...favorites, ...[pokemonInfo]]);
    }
  };

  const isFav = (id: number, favorites: Pokemon[]) => {
    const favIds = favorites.map((favorite) => favorite.id);

    return favIds.includes(id);
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.target.value.toLowerCase())
          }
          onSubmit={searchPokemonByKeyword}
        />
        <div className="ContentOptions--right">
          <Filter onChangeFilter={onChangeFilter} />
          <Sort setPokemon={setPokemon} />
        </div>
      </ContentOptions>
      {/* {if (error) <Error />} */}
      <List>
        {
          !loading ? 
          pokemon.map((pokemonInfo: any, i) => {
            return (
              <Card
                data={pokemonInfo}
                key={`${pokemonInfo.id}`}
                onClickFavorite={() => updateFavorites(pokemonInfo)}
                isFavorite={isFav(pokemonInfo.id, favorites)}
              />
            );
          }) : null
        }
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
