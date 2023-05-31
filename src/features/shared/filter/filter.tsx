import { ChangeEventHandler, FC } from "react";
import "./filter.scss";
import { options } from "./filter.constans";
interface Props {
  onChange: ChangeEventHandler;
  type: string;
}
const Filter: FC<Props> = ({ onChange, type }) => {
  return (
    <div className="Filter">
      <select
        className="Filter__select"
        value={type}
        defaultValue="Type"
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
