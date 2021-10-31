import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          style={{ cursor: "pointer", padding: 8 }}
          key={todo.id + index + todo.title}
          onClick={() => {
            onTodoClick(todo);
          }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
