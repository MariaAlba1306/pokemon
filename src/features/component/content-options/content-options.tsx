import "./content-options.scss";

function ContentOptions({ children }: any) {
  return <div className="ContentOptions">{children}</div>;
}

import Searchbox from "features/shared/searchbox/searchbox";
import Filter from "features/shared/filter/filter";
import Sort from "features/shared/sort/sort";

const ContentOptions: FC = () => {
  const handleChange = (value: string) => {};

  return (
    <div className="ContentOptions">
      <Searchbox
        mode="dark"
        className="Searchbox__input"
        size="small"
        type="search"
        placeholder="Search Pokemons"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />
      <div className="ContentOptions--right">
        <Filter />
        <Sort />
      </div>
    </div>
  );
};
export default ContentOptions;
