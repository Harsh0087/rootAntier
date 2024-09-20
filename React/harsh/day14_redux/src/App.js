import React from "react";
import { Provider } from "react-redux";
import store from "./TodoApp/Store";
import AddTodo from "./TodoApp/components/AddTodo";
import TodoList from "./TodoApp/components/TodoList";
import Filter from "./TodoApp/components/Filter";

const App = () => (
  <Provider store={store}>
    <div style={{ padding: "20px" }}>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  </Provider>
);

export default App;