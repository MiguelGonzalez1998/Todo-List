import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todos/TodoSlice";
import { del } from "./features/todos/TodoSlice";
import Todo from "./components/Todo.jsx";
import FormTodo from "./components/FormTodo";

function App() {
  const dispatch = useDispatch();

  const onSubmit = (inputTarea) => {
    console.log(inputTarea);
    dispatch(
      add({ txt: inputTarea, id: Date.now().toString(), completed: false })
    );
  };

  return (
    <div className="main">
      <FormTodo onSubmit={onSubmit} />
      <Todo />
    </div>
  );
}

export default App;
