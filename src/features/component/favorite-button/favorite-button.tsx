import favoriteIcon from "assets/icons/icon-favorite.svg";
import "./favorite-button.scss";

interface Props {
  toggleModal: () => void;
}

function FavoriteButton({ toggleModal }: Props) {
  return (
    <div className="Favorite-button">
      <a onClick={() => toggleModal()} className="Favorite-button__link">
        <div className="Favorite-button__text">
          <p>FAVORITES</p>
        </div>
        <div className="Favorite-button__text__logo">
          <img src={favoriteIcon} className="Favorite-button__text__image" />
        </div>
      </a>
    </div>
  );
}
export default FavoriteButton;
