import { ChangeEvent, FC } from "react";
import "./content-options.scss";
import Searchbox from "features/shared/searchbox/searchbox";

const ContentOptions: FC = () => {
  const handleChange = (value: string) => {
    let searchValue = value;
  };
  return (
    <div className="Content-options">
      <Searchbox
        placeholder="Search Pokemons"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />
    </div>
  );
};
export default ContentOptions;
