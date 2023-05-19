import { favoritesInfo } from "./favorites-list";
import Card from "features/shared/card/card";
import "./favorites-modal.scss";
import { ChangeEvent, FC } from "react";
import Searchbox from "features/shared/searchbox/searchbox";
import "features/shared/searchbox/searchbox.scss";
import closeImage from "assets/icons/icon-close.svg";
import useSearchPokemon from "hooks/useSearchPokemon";
import usePokemon from "hooks/usePokemon";

interface Props {
  toggleModal: () => void;
  children: any;
}

export function FavoritesModal({ toggleModal, children }: Props) {
  const {
    pokemon,
    setPokemon,
    loading,
    setLoading,
    allPokemons,
    setAllPokemons,
  } = usePokemon();
  return (
    <div className="FavoritesModal">
      <div className="FavoritesModal__modal">
        <img
          src={closeImage}
          className="FavoritesModal__close"
          onClick={() => toggleModal()}
        />
        <div className="FavoritesModal__searchbox">{children}</div>
      </div>
    </div>
  );
}
export default FavoritesModal;
