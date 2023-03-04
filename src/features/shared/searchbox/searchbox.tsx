import { ChangeEventHandler, FC } from "react";
import searchIcon from "assets/icons/icon-search.svg";
import "./searchbox.scss";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
}
const Searchbox: FC<Props> = ({ placeholder, onChange }) => {
  return (
    <div className="Searchbox">
      <input
        className="Searchbox__input"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
      <img src={searchIcon} className="Searchbox__icon" alt="icon_search" />
    </div>
  );
};
export default Searchbox;
