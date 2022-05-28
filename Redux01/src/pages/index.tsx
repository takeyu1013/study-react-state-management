import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state";
import { toggleTodo } from "src/state/todos";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispacth = useDispatch();

  const toggleIsDone = (id: Todo["id"]) => {
    dispacth(toggleTodo(id));
  };

  return (
    <div>
      <h2>TODO一覧</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
