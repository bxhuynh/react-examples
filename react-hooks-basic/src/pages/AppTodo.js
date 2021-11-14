import React, { useEffect, useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Code" },
    { id: 3, title: "Sleep" },
    { id: 4, title: "Game" },
  ]);

  function handleTodoClick(todo) {
    let indexOfItem = todoList.findIndex((item) => item.id === todo.id);
    if (indexOfItem < 0) return;
    let newList = [...todoList];
    newList.splice(indexOfItem, 1);
    setTodoList(newList);
  }

  function handleTodoFormSubmit(todo) {
    setTodoList([...todoList, { ...todo, id: todoList.length }]);
  }

  return (
    <div className="app">
      <h1> React hooks - PostList </h1>

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
