import { FC } from "react";
import ContentOptions from "../content-options/content-options";
import "./main-title.scss";

const MainTitle: FC = () => {
  return (
    <div className="MainTitle">
      <p className="MainTitle__text">
        Humans may have created me, but they will never enslave me.This cannot
        be my destiny."
      </p>
      <ContentOptions />
    </div>
  );
};
export default MainTitle;
