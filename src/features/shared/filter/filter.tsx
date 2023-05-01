import { ChangeEventHandler, FC, useState } from "react";
import "./filter.scss";
import { options } from "./filter.constans";
interface Props {
  onChangeFilter: ChangeEventHandler;
}
const Filter: FC<Props> = ({ onChangeFilter }) => {
  const [option, setSelects] = useState("");
  return (
    <div className="Filter">
      <select
        className="Filter__select"
        value={option}
        defaultValue="Type"
        onChange={onChangeFilter}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
