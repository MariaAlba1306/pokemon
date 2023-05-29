import "./App.scss";
import { useState, ChangeEvent, useEffect } from "react";
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
import { Pokemon } from "api/pokemon-dto";
import useSortPokemon from "hooks/useSortPokemon";
import useTypePokemon from "hooks/useTypePokemon";
import Error from "features/shared/error/error";
function App() {
  const {
    pokemon,
    setPokemon,
    loading,
    setLoading,
    allPokemons,
    setAllPokemons,
    setError,
    error,
  } = usePokemon();
  const { setSearchTerm, searchPokemonByKeyword } = useSearchPokemon(
    setPokemon,
    setLoading,
    setAllPokemons,
    setError
  );
  const { searchPokemonByType, setType, type } = useTypePokemon(setPokemon);
  const { searchPokemonBySort } = useSortPokemon(
    setPokemon,
    pokemon,
    setLoading
  );
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
  const [pokemonNumber, setPokemonNumber] = useState<number>(20);
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [favoritesSearched, setSearchFavorites] = useState<string>("");
  const [isClicked, setClicked] = useState<boolean>(false);
  const [newType, setNewType] = useState<string>("All");

  useEffect(() => {
    if (newType == type) {
      setType(newType);
      setNewType(newType);
      searchPokemonByType();
    } else {
      searchPokemonByType();
    }
  }, [type]);

  async function updateType(newType: any) {
    setType(newType);
    searchPokemonByType();
    if (newType != "All") {
      setAllPokemons(false);
    }
  }

  function toggle(): void {
    setShouldShowModal(!shouldShowModal);
  }

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

  const onEntryInViewHandler = (inView: boolean) => {
    if (inView && allPokemons) {
      setPokemonNumber((pokemonNumber) => pokemonNumber + 20);
      getTwentyPokemons(0, pokemonNumber).then((initialPokemons) => {
        setPokemon(initialPokemons);
      });
    }
  };

  const searchFavorites = () => {};

  const isSort = (isClicked: any) => {
    if (isClicked == false) {
      setClicked(true);
    } else {
      setClicked(false);
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.target.value.toLowerCase())
          }
          onSubmit={searchPokemonByKeyword}
        />
        <div className="ContentOptions--right">
          <Filter
            onChange={(ev: any) => {
              updateType(ev.target.value);
            }}
            type={type}
          />
          {type != "All" ? (
            <Sort
              onClickSort={(ev: any) => {
                searchPokemonBySort();
                isSort(isClicked);
              }}
              isSorted={isClicked}
            />
          ) : null}
        </div>
      </ContentOptions>
      {error ? <Error /> : null}
      <List>
        {!loading
          ? pokemon.map((pokemonInfo: any, i) => {
              return (
                <Card
                  data={pokemonInfo}
                  key={`${pokemonInfo.id}`}
                  onClickFavorite={() => updateFavorites(pokemonInfo)}
                  isFavorite={isFav(pokemonInfo.id, favorites)}
                />
              );
            })
          : null}
        {<InView onChange={onEntryInViewHandler}></InView>}
      </List>
      {shouldShowModal ? (
        <FavoritesModal toggleModal={toggle}>
          <Searchbox
            className="Searchbox__input"
            mode="light"
            size="medium"
            type="search-fav"
            placeholder="Search Pokemons"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchFavorites(event.target.value.toLowerCase())
            }
            onSubmit={searchFavorites}
          />
          <div className="FavoritesModal__list">
            {favoritesSearched.length > 0
              ? favorites
                  .filter((data) => data.name.includes(favoritesSearched))
                  .map((filteredName) => {
                    return (
                      <Card
                        data={filteredName}
                        isFavorite={isFav(filteredName.id, favorites)}
                        onClickFavorite={() => updateFavorites(filteredName)}
                      />
                    );
                  })
              : favorites.map((data: any) => {
                  return (
                    <Card
                      data={data}
                      isFavorite={isFav(data.id, favorites)}
                      onClickFavorite={() => updateFavorites(data)}
                    />
                  );
                })}
          </div>
        </FavoritesModal>
      ) : null}
    </div>
  );
}

export default App;
