import favoriteIcon from "assets/icons/icon-favorite.svg";
import "./favorite-button.scss";
export default function FavoriteBtn() {
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
}
