import { useState } from "react";
import "./App.css";

import Display from "./components/Todolist";
import List from "./components/List";
import { ITodo } from "./type";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
    };
    setTodos((prev) => [...prev, obj]);
  }

  return (
    <>
      <Display onTodoAdd={onTodoAdd} />

      <List todos={todos} />
    </>
  );
}
export default App;
