import { useState } from "react";

import Todo from "../Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(["homework", "shopping"]);

  const addTodo = () => {
    setTodos((prev) => {
      return [...prev, "new todo item"];
    });
  };

  //   const renderTodo = (item) => {
  //     return (
  //       <li className="todo-list-item">
  //         <span>{item}</span>
  //       </li>
  //     );
  //   };

  return (
    <div className="todo-list">
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((item) => (
          <Todo item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
