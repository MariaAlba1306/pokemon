import { cardInfo } from "./list-info";
import Card from "features/shared/card/card";
import "./list.scss";
import { FC } from "react";


const List: FC = () => {
  const listItems = cardInfo.map((data) => <Card data={data} />);
  return <div className="List">{listItems}</div>;
};
export default List;
