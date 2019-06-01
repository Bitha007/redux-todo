import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.length !== 0 || todos.length === undefined
        ? todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
              />
            );
          })
        : null}
    </div>
  );
}

export default TodoList;
