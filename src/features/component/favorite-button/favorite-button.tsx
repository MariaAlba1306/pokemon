import favoriteIcon from "assets/icons/icon-favorite.svg";
import "./favorite-button.scss";
import { FC } from "react";

const FavoriteButton: FC = () => {
  return (
    <div className="Favorite-button">
      <a href="#home">
        <div className="Favorite-button__text">
          <p>FAVORITES</p>
        </div>
      </a>
      <div className="Favorite-button__text__logo">
        <img src={favoriteIcon} className="" />
      </div>
    </div>
  );
};
export default FavoriteButton;
