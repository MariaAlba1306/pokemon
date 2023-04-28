import { favoritesInfo } from "./favorites-list";
import Card from "features/shared/card/card";
import "./favorites-modal.scss";
import { ChangeEvent, FC } from "react";
import Searchbox from "features/shared/searchbox/searchbox";
import "features/shared/searchbox/searchbox.scss";
import closeImage from "assets/icons/icon-close.svg";

interface Props {
  toggleModal: () => void;
}

function FavoritesModal({ toggleModal }: Props) {
  const handleChange = (value: string) => {};
  return (
    <>
      <div className="FavoritesModal">
        <div className="FavoritesModal__modal">
          <img
            src={closeImage}
            className="FavoritesModal__close"
            onClick={() => toggleModal()}
            
          />
          <div className="FavoritesModal__searchbox">
            <Searchbox
              className="Searchbox__input"
              mode="light"
              size="medium"
              type="search-fav"
              placeholder="Search Pokemons"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange(event.target.value)
              }
            />
          </div>
          <div className="FavoritesModal__list">
            {favoritesInfo.map((data) => {
              return <Card data={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default FavoritesModal;
