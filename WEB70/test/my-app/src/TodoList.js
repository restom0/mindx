import { useEffect, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ todos, updateTodo, selectedLanguage }) => {
  const calculateDaysLeft = (dueDate) => {
    const timeDifference = dueDate.getTime() - new Date().getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    console.log(dueDate);
    if (daysLeft >= 0) {
      return daysLeft;
    } else {
      return 0;
    }
  };
  return (
    <div className="todo-list-container">
      {todos.length > 0 &&
        todos.map((el) =>
          el.isCompleted === false ? (
            <div className="todo-item-container">
              <FaRegCircle
                className="item-done-button"
                onClick={() => updateTodo(el.id)}
                color="#9a9a9a"
              />
              <div className="item-title">{el.text}</div>
              <div className="item-title">
                {selectedLanguage === "us" ? "Due in" : "Còn"}{" "}
                {calculateDaysLeft(new Date(el.deadline))} days
              </div>
            </div>
          ) : (
            <div className="todo-item-container done">
              <FaRegCheckCircle
                color="#9a9a9a"
                className="item-done-button"
                onClick={() => updateTodo(el.id)}
              />

              <div className="item-title">{el.text}</div>
            </div>
          )
        )}
      {/* <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Do excercises</div>
      </div>
      <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Go shopping</div>
      </div>
      <div className="todo-item-container done">
        <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        <div className="item-title">House cleaning</div>
      </div> */}
    </div>
  );
};

export default TodoList;
