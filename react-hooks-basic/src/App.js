import React, { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import queryString from "query-string";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Eat" },
  //   { id: 2, title: "Code" },
  //   { id: 3, title: "Sleep" },
  //   { id: 4, title: "Game" },
  // ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }

    fetchData();
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  // function handleTodoClick(todo) {
  //   let indexOfItem = todoList.findIndex((item) => item.id === todo.id);
  //   if (indexOfItem < 0) return;
  //   let newList = [...todoList];
  //   newList.splice(indexOfItem, 1);
  //   setTodoList(newList);
  // }

  // function handleTodoFormSubmit(todo) {
  //   setTodoList([...todoList, { ...todo, id: todoList.length }]);
  // }

  return (
    <div className="app">
      <h1> React hooks - PostList </h1>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
