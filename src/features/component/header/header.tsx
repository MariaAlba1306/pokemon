import "./header.scss";
import FavoriteBtn from "../favoritebtn/favorite";
import logoImage from "assets/images/pokemon_logo.svg";

export default function Header() {
  return (
    <div className="Header">
      <a href="#default">
        <img src={logoImage} className="Header__logo" />
      </a>
      <FavoriteBtn />
    </div>
  );
}
