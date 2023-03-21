import { FC, useState } from "react";
import "./card.scss";
import locationIcon from "assets/icons/location.svg";
import iconFavorite from "assets/icons/icon-favorite.svg";

export function Card({ data }: any) {
  const { id, image, type, name, location } = data;
  return (
    <div className="Card-container">
      <div id={id} className="card">
        <div className="card__image">
          {image && (
            <img src={image} alt="pokemon" className="card__image__space" />
          )}
          <div className="card__favorite">
            <img
              src={iconFavorite}
              alt="favorite"
              className="card__image__favorite"
            />
          </div>
        </div>
        <div className="card__info">
          {type && (
            <div className="card__type">
              <p className="card__type__text">{type}</p>
            </div>
          )}
          {id && (
            <div className="card__id">
              <p className="card__id__text">{id}</p>
            </div>
          )}
        </div>
        <div className="card__name">
          <p className="card__name__text">{name}</p>
          {location && (
            <div className="card__name__location">
              <img
                src={locationIcon}
                className="card__name__location__icon"
                alt="pokemon"
              />
              <p className="card__name__location__info">{location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
