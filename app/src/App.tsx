// import { useState } from "react";
import "./App.css";

import Display from "./components/Todolist";
import List from "./components/List";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Display />

      <List />
    </>
  );
}
export default App;
