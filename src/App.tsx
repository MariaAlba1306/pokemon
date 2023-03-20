import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./features/component/header/header";
import MainTitle from "features/component/main-title/main-title";
import ContentOptions from "features/component/content-options/content-options";

function App() {
  return (
    <div className="App">
      <Header />
      <MainTitle />
      <ContentOptions/>
    </div>
  );
}

export default App;
