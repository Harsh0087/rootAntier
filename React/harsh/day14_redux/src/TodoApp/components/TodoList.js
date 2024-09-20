import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../Actions";

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map((todo, index) => (
      <li
        key={index}
        onClick={() => dispatch(toggleTodo(index))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);