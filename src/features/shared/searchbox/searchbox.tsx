import { ChangeEventHandler, FC } from "react";
import searchIcon from "assets/icons/icon-search.svg";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
  onKeyDown: any;
  className: string;
  mode: string;
  size: string;
  type: string;
}

const Searchbox: FC<Props> = ({
  placeholder,
  onChange,
  onKeyDown,
  mode = "Searchbox",
  className = "Searchbox__input",
  size = "medium",
  type = "search",
}) => {
  return (
    <div className={`Searchbox Searchbox-${mode}`}>
      <input
        className={`${className}  Searchbox-${size}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <img src={searchIcon} className="Searchbox__icon" alt="icon_search" />
    </div>
  );
};
export default Searchbox;
