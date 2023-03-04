import { FC } from "react";
import "./filter.scss";

import dropdown from "assets/icons/icon-dropdown.svg";

const Filter: FC = () => {
  return (
    <button className="Filter">
      <p className="Filter__text">Type</p>
      <img src={dropdown} className="Filter__icon" alt="filter icon" />
    </button>
  );
};
export default Filter;
