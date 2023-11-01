import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const Display: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onTodoAdd(text);

    setText("");
  }

  return (
    <>
      <h1>List app</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter List</label>
        <input
          type="test"
          id="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
    </>
  );
};

export default Display;
