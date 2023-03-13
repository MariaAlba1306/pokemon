import { FC, useState } from "react";
import "./sort.scss";
import arrowUp from "assets/icons/icon-arrow-up.svg";
import arrowDown from "assets/icons/icon-arrow-down.svg";
import letters from "assets/icons/icon-letter.svg";

const sucessImage = <img src={arrowUp} className="Sort__icon-arrow" />;
const defaultImage = <img src={arrowDown} className="Sort__icon-arrow" />;

const Sort: FC = () => {
  const [success, setSucess] = useState(false);
  function saveClickProperty() {
    if (!success) {
      setSucess(true);
    } else {
      setSucess(false);
    }
  }
  return (
    <button className="Sort" onClick={saveClickProperty}>
      {success ? sucessImage : defaultImage}
      <img src={letters} className="Sort__icon-letter" alt="filter icon" />
    </button>
  );
};
export default Sort;
