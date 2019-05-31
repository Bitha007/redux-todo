import React from "react";
import TodoList from "../components/TodoList";

function VisibleTodoList({ todos, activeFilter, toggleTodo }) {
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };
  return (
    <TodoList
      toggleTodo={toggleTodo}
      todos={getVisibleTodos(todos, activeFilter)}
    />
  );
}

export default VisibleTodoList;
