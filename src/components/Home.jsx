import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

function Home({
  todos,
  addTodo,
  filter,
  changeFilter,
  activeFilter,
  toggleTodo
}) {
  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <VisibleTodoList
        todos={todos}
        activeFilter={activeFilter}
        toggleTodo={toggleTodo}
      />
      <Footer
        filter={filter}
        changeFilter={changeFilter}
        activeFilter={activeFilter}
      />
    </div>
  );
}

export default Home;
