import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./features/component/header/header";
import MainTitle from "features/component/main-title/main-title";
import ContentOptions from "features/component/content-options/content-options";
import List from "features/component/list/list";
import FavoritesModal from "features/component/modal/favorites-modal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  function toggle() {
    setShouldShowModal(!shouldShowModal);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <div className="App">
      <Header toggleModal={toggle} />
      <MainTitle />
      <ContentOptions />
      <List />
      {shouldShowModal ? <FavoritesModal toggleModal={toggle} /> : null}
    </div>
  );
}

export default App;
