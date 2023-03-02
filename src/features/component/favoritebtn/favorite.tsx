import favoriteIcon from "assets/icon-favorite.svg";
import "./favoritebtn.scss";
export default function FavoriteBtn() {
  return (
    <div className="FavoriteBtn">
      <a href="#home">
        <div className="FavoriteBtn__text">
          <p>FAVORITES</p>
        </div>
      </a>
      <div className="FavoriteBtn__text__logo">
        <img src={favoriteIcon} className="" />
      </div>
    </div>
  );
}
