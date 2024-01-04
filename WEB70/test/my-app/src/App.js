import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("us");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const [showOnlyNotFinished, setShowOnlyNotFinished] = useState(false);

  const filteredTodos =
    showOnlyNotFinished && todos.length > 0
      ? todos.filter((todo) => !todo.isCompleted)
      : todos;

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const updateTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const calculateRemainingTasks = () => {
    if (todos.length === 0) return 0;
    return todos.filter((todo) => todo.isCompleted === false).length;
  };
  return (
    <div className="App">
      <div className="container">
        <div className="todo-item-container">
          <input
            id="check"
            className="form-check-input me-1"
            type="checkbox"
            onChange={() => setShowOnlyNotFinished((prev) => !prev)}
          />
          <div className="item-title">
            {selectedLanguage === "us"
              ? "Not finished only"
              : "Chỉ chưa hoàn thành"}
          </div>
        </div>
        <TodoListHeader
          selectedLanguage={selectedLanguage}
          calculateRemainingTasks={calculateRemainingTasks}
        />
        <TodoList
          selectedLanguage={selectedLanguage}
          todos={filteredTodos}
          updateTodo={updateTodo}
        />
        <Form addTodo={addTodo} selectedLanguage={selectedLanguage} />
      </div>
      <Footer
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </div>
  );
};
