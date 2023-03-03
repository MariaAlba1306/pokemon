import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./features/component/header/header";
import ContentHeader from "features/component/content-header/content-header";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentHeader/>
    </div>
  );
}

export default App;
