import React from "react";
import { RecoilRoot } from "recoil";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <RecoilRoot>
      <div className="App tc">
        <h1 className="">
          Todos{" "}
          <span role="img" aria-label="flag">
            🏁
          </span>
        </h1>
        <div className="list pt3 br3">
          <Todos />
          <AddTodo />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
