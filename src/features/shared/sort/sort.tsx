import { ChangeEventHandler, FC, useState } from "react";
import "./sort.scss";
import arrowUp from "assets/icons/icon-arrow-up.svg";
import arrowDown from "assets/icons/icon-arrow-down.svg";
import letters from "assets/icons/icon-letter.svg";
import UseSortPokemon from "hooks/useSortPokemon";
import usePokemon from "hooks/usePokemon";

const sucessImage = <img src={arrowUp} className="Sort__icon-arrow" />;
const defaultImage = <img src={arrowDown} className="Sort__icon-arrow" />;
interface Props {

  setPokemon: any;
}
const Sort: FC<Props> = ({ setPokemon }) => {
  const [success, setSucess] = useState(false);
  const [initialSortNumber, setInitialSortNumber] = useState(-1);
  const [finalSortNumber, setFinalSortNumber] = useState(1);
  function saveClickProperty() {
    if (!success) {
      setSucess(true);
    } else {
      setSucess(false);
    }
    if (initialSortNumber == -1) {
      setInitialSortNumber(1);
    } else {
      setInitialSortNumber(-1);
    }
    if (finalSortNumber == 1) {
      setFinalSortNumber(-1);
    } else {
      setFinalSortNumber(1);
    }
    UseSortPokemon(initialSortNumber, finalSortNumber, setPokemon);
  }

  return (
    <button className="Sort" onClick={saveClickProperty}>
      {success ? sucessImage : defaultImage}
      <img src={letters} className="Sort__icon-letter" alt="filter icon" />
    </button>
  );
};
export default Sort;
