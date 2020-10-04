import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
