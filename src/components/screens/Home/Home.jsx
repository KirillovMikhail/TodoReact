import React, { useState, useCallback, useEffect } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

// const data = [
//   { id: "23", title: "Finish the essay collaboration", isComleted: true },
//   { id: "24", title: "Read next book", isComleted: false },
//   { id: "25", title: "Send email", isComleted: false },
// ];

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isComleted = !current.isComleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="mb-10 text-2xl font-bold text-center ">Todo tasks</h1>
      <CreateTodoField setTodos={setTodos} />
      {loading && <p>Loading....</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
