import React, { useEffect, useState } from "react";

export default function TodoApp({ todos, addTodo, fetchTodos }) {
  const [text, setText] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://my-json-server.typicode.com/typicode/demo/posts")
  //     .then((res) => setTodos(res.data));
  // }, [setTodos]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
