import { favoritesInfo } from "./favorites-list";
import Card from "features/shared/card/card";
import "./favorites-modal.scss";
import { ChangeEvent, FC } from "react";
import Searchbox from "features/shared/searchbox/searchbox";
import "features/shared/searchbox/searchbox.scss";
import closeImage from "assets/icons/icon-close.svg";
interface Props {
  show: boolean;
  close: any;
}

function FavoritesModal({ show, close }: Props) {
  const handleChange = (value: string) => { };
  return (
    <>
      {show ? (
        <div className="FavoritesModal">
          <img
            src={closeImage}
            className="FavoritesModal__close"
            onClick={() => close()} />
          <div className="FavoritesModal__searchbox">
            <Searchbox
              className="Searchbox__input"
              mode="light"
              size="medium"
              type="search-fav"
              placeholder="Search Pokemons"
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)} />
          </div>
          <div className="FavoritesModal__list">
            {favoritesInfo.map((data) => {
              return <Card data={data} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
export default FavoritesModal;
