import { ChangeEventHandler, FC, FormEvent } from "react";
import searchIcon from "assets/icons/icon-search.svg";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
  className: string;
  mode: string;
  size: string;
  type: string;
  onSubmit: () => void
}

const Searchbox: FC<Props> = ({
  placeholder,
  onChange,
  onSubmit,
  mode = "Searchbox",
  className = "Searchbox__input",
  size = "medium",
  type = "search",
}) => {

  const searchPokemons = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className={`Searchbox Searchbox-${mode}`} onSubmit={searchPokemons}>
      <input
        className={`${className}  Searchbox-${size}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <img src={searchIcon} className="Searchbox__icon" alt="icon_search" />
    </form>
  );
};
export default Searchbox;
