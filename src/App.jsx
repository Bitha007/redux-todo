import React, { useState, useRef, useEffect } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";
import Home from "./components/Home";

// const store = createStore(rootReducer);

function App() {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("SHOW_ALL");

  const idRef = useRef(0);
  function addTodo(text) {
    const newTodo = {
      text,
      id: idRef.current,
      completed: false
    };
    const newTodos = [newTodo, ...todos];
    idRef.current++;
    setTodos(newTodos);
  }
  function changeFilter(activeFilter) {
    setActiveFilter(activeFilter);
  }
  function toggleTodo(id) {
    console.log("toggleTodo called");
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }
  console.log(todos, activeFilter);
  return (
    // <Provider store={store}>
    <Home
      todos={todos}
      addTodo={addTodo}
      activeFilter={activeFilter}
      changeFilter={changeFilter}
      toggleTodo={toggleTodo}
    />
    // </Provider>
  );
}

export default App;
