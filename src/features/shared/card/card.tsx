import { FC, useState } from "react";
import "./card.scss";
import { cardInfo } from "./card.info";
import locationIcon from "assets/icons/location.svg";
import iconFavorite from "assets/icons/icon-favorite.svg";

const Card: FC = () => {

  return (
    <div className="Card-container">
      {cardInfo.map((info) => {
        return (
          <div id={info.id} className="card">
            <div className="card__image">
              {info.image && (
                <img
                  src={info.image}
                  alt="pokemon"
                  className="card__image__space"
                />
              )}
              <div className="card__favorite"></div>
            </div>
            <div className="card__info">
              {info.type && (
                <div className="card__type">
                  <p className="card__type__text">{info.type}</p>
                </div>
              )}
              {info.id && (
                <div className="card__id">
                  <p className="card__id__text">{info.id}</p>
                </div>
              )}
            </div>
            <div className="card__name">
              <p className="card__name__text">{info.name}</p>
              {info.location && (
                <div className="card__name__location">
                  <img
                    src={locationIcon}
                    className="card__name__location__icon"
                    alt="pokemon image"
                  />
                  <p className="card__name__location__info">{info.location}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
