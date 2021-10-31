import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import TodoApp from "./containers/TodoApp";
import Login from "./containers/Login";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

function App({ auth }) {
  return (
    <div className="App">
      {!auth.token ? <Login /> : null}
      {auth.token ? <TodoApp /> : null}
    </div>
  );
}

export default connect(mapStateToProps, null)(App);
