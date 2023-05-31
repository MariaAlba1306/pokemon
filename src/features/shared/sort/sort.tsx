import "./sort.scss";
import arrowUp from "assets/icons/icon-arrow-up.svg";
import arrowDown from "assets/icons/icon-arrow-down.svg";
import letters from "assets/icons/icon-letter.svg";

const sucessImage = <img src={arrowUp} className="Sort__icon-arrow" />;
const defaultImage = <img src={arrowDown} className="Sort__icon-arrow" />;
interface Props {
  onClickSort: React.MouseEventHandler;
  isSorted: boolean;
}

export function Sort({ onClickSort, isSorted }: Props) {
  return (
    <button className="Sort" onClick={onClickSort}>
      {isSorted ? defaultImage : sucessImage}
      <img src={letters} className="Sort__icon-letter" alt="filter icon" />
    </button>
  );
}
export default Sort;
