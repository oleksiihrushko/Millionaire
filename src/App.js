import React, { useState } from "react";
import { useSelector } from "react-redux";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";

function App() {
  const page = useSelector((state) => state.page);

  return (
    <>
      {page === "home" && <Home />}
      {page === "game" && <Game />}
      {page === "result" && <Result />}
    </>
  );
}

export default App;
