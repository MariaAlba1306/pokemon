import "./header.scss";
import FavoriteButton from "../favorite-button/favorite-button";
import logoImage from "assets/images/pokemon_logo.svg";
import { FC } from "react";

interface Props {
  toggleModal: () => void;
}
function Header({ toggleModal }: Props){
  return (
    <div className="Header">
      <a href="#default">
        <img src={logoImage} className="Header__logo" />
      </a>
      <FavoriteButton toggleModal={toggleModal} />
    </div>
  );
};
export default Header;
