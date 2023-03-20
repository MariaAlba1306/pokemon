import { FC } from "react";
import "./card.scss";
import locationIcon from "assets/icons/location.svg";
import { cardInfo } from "./card.info";

const Card: FC = () => {
  return (
    <div className="Card-container">
      {cardInfo.map((info) => {
        return (
          <div className="Card">
            <div className="Card__image">
              <div className="Card__favorite"></div>
            </div>
            <div className="Card__info">
              <div className="Card__type">
                <p className="Card__type__text">{info.type}</p>
              </div>
              <div className="Card__id">
                <p className="Card__id__text">{info.id}</p>
              </div>
            </div>
            <div className="Card__name">
              <p className="Card__name__text">{info.name}</p>
              <div className="Card__name__location">
                <img
                  src={locationIcon}
                  className="Card__name__location__icon"
                />
                <p className="Card__name__location__info">{info.location}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
