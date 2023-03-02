import "./header.scss";
import FavoriteButton from "../favorite-button/favorite-button";
import logoImage from "assets/images/pokemon_logo.svg";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="Header">
      <a href="#default">
        <img src={logoImage} className="Header__logo" />
      </a>
      <FavoriteButton />
    </div>
  );
};
export default Header;
