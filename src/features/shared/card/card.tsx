import { FC } from "react";
import "./card.scss";
import locationIcon from "assets/icons/location.svg";
import { cardInfo } from "./card.info";

const Card: FC = () => {
  return (
    <div className="Card-container">
      {cardInfo.map((info) => {
        return (
          <div className="card">
            <div className="card__image">
              <div className="card__favorite"></div>
            </div>
            <div className="card__info">
              <div className="card__type">
                <p className="card__type__text">{info.type}</p>
              </div>
              <div className="card__id">
                <p className="card__id__text">{info.id}</p>
              </div>
            </div>
            <div className="card__name">
              <p className="card__name__text">{info.name}</p>
              <div className="card__name__location">
                <img
                  src={locationIcon}
                  className="card__name__location__icon"
                  alt="pokemon image"
                />
                <p className="card__name__location__info">{info.location}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
