 import "./header.scss";
 import logoImage from "../../../../assets/pokemon_logo.png";
 import favoriteIcon from "../../../../assets/icon-favorite.svg";

 export  default function Header (){
  return (
    <header className="App-header">
      <div className="header">
        <a href="#default">
          <img src={logoImage} className="header__logo" />
        </a>
        <div className="header-right">
          <a className="header__favorite" href="#home">
            <div className="header__favorite__text">
              <p>FAVORITES</p>
            </div>
          </a>
          <div className="header__favorite__logo">
            <img src={favoriteIcon} className="" />
          </div>
        </div>
      </div>
    </header>
  );}