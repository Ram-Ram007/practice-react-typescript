import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}



const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");


  function handleSubmit(){
    onTodoAdd()
  }
  return (
    <>
      <h1>List app</h1>
      <form>
        <label htmlFor="input">Enter List</label>
        <input type="test" id="input" />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default Display;
