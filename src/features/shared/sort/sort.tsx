import { ChangeEventHandler, FC, useState } from "react";
import "./sort.scss";
import arrowUp from "assets/icons/icon-arrow-up.svg";
import arrowDown from "assets/icons/icon-arrow-down.svg";
import letters from "assets/icons/icon-letter.svg";
import UseSortPokemon from "hooks/useSortPokemon";
import usePokemon from "hooks/usePokemon";
import useSortPokemon from "hooks/useSortPokemon";

const sucessImage = <img src={arrowUp} className="Sort__icon-arrow" />;
const defaultImage = <img src={arrowDown} className="Sort__icon-arrow" />;
interface Props {
  isClicked: boolean;
}

export function Sort({ onClickSort, isClicked, isSorted }: any) {
  console.log(isClicked);
  return (
    <button className="Sort" onClick={onClickSort}>
      {isSorted ? defaultImage : sucessImage}
      <img src={letters} className="Sort__icon-letter" alt="filter icon" />
    </button>
  );
}
export default Sort;
