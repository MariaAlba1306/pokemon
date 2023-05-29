import "./favorites-modal.scss";
import "features/shared/searchbox/searchbox.scss";
import closeImage from "assets/icons/icon-close.svg";

interface Props {
  toggleModal: () => void;
  children: JSX.Element[];
}

export function FavoritesModal({ toggleModal, children }: Props) {
  return (
    <div className="FavoritesModal">
      <div className="FavoritesModal__modal">
        <img
          src={closeImage}
          className="FavoritesModal__close"
          onClick={() => toggleModal()}
          alt="favorites button"
        />
        <div className="FavoritesModal__searchbox">{children}</div>
      </div>
    </div>
  );
}
export default FavoritesModal;
