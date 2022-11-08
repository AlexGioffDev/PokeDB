import React from "react";
import "./App.css";
import Header from "./components/Header/Header.Components";
import { MainPage } from "./pages/Main.Page";

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

export default App;
