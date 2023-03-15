import { ChangeEvent, FC } from "react";
import "./content-options.scss";
import Searchbox from "features/shared/searchbox/searchbox";
import Filter from "features/shared/filter/filter";

const ContentOptions: FC = () => {
  const handleChange = (value: string) => {
    let searchValue = value;
  };
  return (
    <div className="ContentOptions">
      <Searchbox
        placeholder="Search Pokemons"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />
      <Filter />
    </div>
  );
};
export default ContentOptions;
