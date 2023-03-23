import { cardInfo } from "./list-info";
import Card from "features/shared/card/card";
import "./list.scss";
import { FC } from "react";

const List: FC = () => {
  return (
    <div className="List">
      {cardInfo.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};
export default List;
