import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isComleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="py-3 px-5 mb-20 w-full flex items-center justify-between rounded-2xl border-gray-800 border-2">
      <input
        className="bg-transparent w-full border-none outline-none"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        placeholder="Введите дело"
      />
    </div>
  );
};

export default CreateTodoField;
