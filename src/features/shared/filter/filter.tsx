import { FC, useState } from "react";
import "./filter.scss";
import { options } from "./filter.constans";

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
