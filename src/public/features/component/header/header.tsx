 import "./header.scss";
 import image from "../../../../assets/pokemon_logo.png";
 import logoImage from "../../../../assets/icon-favorite.png";

 export  default function Header (){
  return (
    <header className="App-header">
      <div className="header">
        <a href="#default">
          <img src={image} className="header__logo" />
        </a>
        <div className="header-right">
         <a className="header__favorite" href="#home">
          <div className="header__favorite__text">
           <p>FAVORITES</p>
          </div></a>
          <div className="header__favorite__logo">
            <img src={logoImage} className="" />
          </div>
        </div>
      </div>
    </header>
  );}