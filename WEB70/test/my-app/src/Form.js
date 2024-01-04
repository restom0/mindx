import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ addTodo, selectedLanguage }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState(new Date());
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (item) {
      const newTodo = {
        id: uuidv4(),
        text: item,
        isCompleted: false,
        deadline: date,
      };
      addTodo(newTodo);
    }
  };
  return (
    <form className="form">
      <input
        placeholder="Enter task ..."
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter date ..."
        onChange={(e) => setDate(new Date(e.target.value))}
      />

      <button onClick={handleAddTodo}>
        {selectedLanguage === "us" ? "Submit" : "Nhập"}
      </button>
    </form>
  );
};

export default Form;
