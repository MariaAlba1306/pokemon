import favoriteIcon from "assets/icons/icon-favorite.svg";
import "./favorite-button.scss";
import { FC, useState } from "react";
import FavoritesModal from "../modal/favorites-modal";

const FavoriteButton: FC = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    <div className="Favorite-button">
      <a onClick={() => Toggle()} className="Favorite-button__link">
        <div className="Favorite-button__text">
          <p>FAVORITES</p>
        </div>
        <div className="Favorite-button__text__logo">
          <img src={favoriteIcon} className="" />
        </div>
      </a>

      <FavoritesModal show={modal} close={Toggle} />
    </div>
  );
};
export default FavoriteButton;
