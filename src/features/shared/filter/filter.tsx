import { FC, useState } from "react";
import "./filter.scss";
const options = [
  {
    label: "Type",
    value: "type",
  },
  {
    label: "Bug",
    value: "bug",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Dragon",
    value: "dragon",
  },
  {
    label: "Electric",
    value: "electric",
  },
  {
    label: "Fairy",
    value: "fairy",
  },
  {
    label: "Fighting",
    value: "fighting",
  },
  {
    label: "Fire",
    value: "fire",
  },
  {
    label: "Flying",
    value: "flying",
  },
  {
    label: "Ghost",
    value: "ghost",
  },
  {
    label: "Grass",
    value: "grass",
  },
  {
    label: "Ground",
    value: "ground",
  },
  {
    label: "Ice",
    value: "ice",
  },
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Poison",
    value: "poison",
  },
  {
    label: "Psychic",
    value: "psychic",
  },
  {
    label: "Rock",
    value: "rock",
  },
  {
    label: "Steel",
    value: "steel",
  },
  {
    label: "Water",
    value: "water",
  },
];

const Filter: FC = () => {
  const [option, setSelects] = useState("");
  return (
    <div className="Filter">
      <select
        className="Filter__select"
        value={option}
        defaultValue="Type"
        onChange={(e) => setSelects(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
