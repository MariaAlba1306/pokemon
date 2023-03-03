
import { FC } from "react";
import ContentOptions from "../content-options/content-options";
import "./content-header.scss";


const ContentHeader: FC = () => {
  return (
    <div className="Content-header">
      <p className="Content-header__text">
        Humans may have created me, but they will never enslave me.This cannot
        be my destiny."
      </p>
      <ContentOptions/>
    </div>
  );
};
export default ContentHeader;
