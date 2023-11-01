import { ITodo } from "../type";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
}

const List: React.FC<ITodoList> = ({ todos, extraCss }) => {
  return (
    <ul className={extraCss}>
      {todos.map((t) => (
        <li key={t.id.toString()}>{t.text}</li>
      ))}
    </ul>
  );
};
export default List;
