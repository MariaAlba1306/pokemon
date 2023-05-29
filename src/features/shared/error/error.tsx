import { FC } from "react";
import "./error.scss"

const Error: FC = ({}) => {
  return (
    <div className="Error">
      <p className="Error__text">No hay resultados en tu búsqueda</p>
    </div>
  );
};
export default Error;
