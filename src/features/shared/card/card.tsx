import { ChangeEventHandler, FC, forwardRef, useState } from "react";
import "./card.scss";
import locationIcon from "assets/icons/location.svg";
import iconFavorite from "assets/icons/icon-favorite.svg";
import iconFavoriteMarked from "assets/icons/icon-favorite-marked.svg";
interface CardProps {
  id: string;
  image: string;
  type: string;
  name: string;
  location: string;
  favorite: any;
}
interface Props {
  onClick: ChangeEventHandler;
}
export function Card({ data, onClick }: any) {
  const { id, image, type, name, location, favorite }: CardProps = data;
  const [isFavorited, setIsFavorited] = useState(favorite);

  function favoriteHeart() {
    setIsFavorited((isFavorited: any) => !isFavorited);
  }
  return (
    <div id={id} className="Card">
      <div className="Card__image">
        {image && (
          <img src={image} alt="pokemon" className="Card__image__space" />
        )}
        <div className="Card__favorite" onClick={favoriteHeart}>
          {!isFavorited ? (
            <img
              src={iconFavorite}
              alt="favorite"
              className="Card__image__favorite"
              onClick={onClick}
            />
          ) : (
            <img
              src={iconFavoriteMarked}
              alt="favorite"
              className="Card__image__favorite"
              onClick={onClick}
            />
          )}
        </div>
      </div>
      <div className="Card__info">
        {type && (
          <div className="Card__type">
            <p className="Card__type__text">{type}</p>
          </div>
        )}
        {id && (
          <div className="Card__id">
            <p className="Card__id__text">{id}</p>
          </div>
        )}
      </div>
      <div className="Card__name">
        <p className="Card__name__text">{name}</p>
        {location && (
          <div className="Card__name__location">
            <img
              src={locationIcon}
              className="Card__name__location__icon"
              alt="pokemon"
            />
            <p className="Card__name__location__info">{location}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Card;
