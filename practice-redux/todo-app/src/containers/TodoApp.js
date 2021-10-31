import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import { addTodo, setTodos, fetchTodos } from "../redux/todo";

const mapStateToProps = (state) => ({
  todos: state.todo.items,
});

// const mapActionsToProps = {
//   addTodo,
//   setTodos,
// };

const mapActionsToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) => dispatch(setTodos(items)),
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);
