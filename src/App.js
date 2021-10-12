import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todos/TodoSlice";
import { del } from "./features/todos/TodoSlice";
import Todo from "./components/Todo.jsx";

function App() {
  const [inputTarea, setInputTarea] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (inputTarea.trim() !== "") {
      e.preventDefault();
      dispatch(
        add({ txt: inputTarea, id: Date.now().toString(), completed: false })
      );
      setInputTarea("");
    } else {
      alert("input vacío");
    }
  };

  const handleChange = (e) => {
    setInputTarea(e.target.value);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputTarea} onChange={handleChange} />
        <input type="submit" value="Guardar Tarea" />
      </form>
      <Todo />
    </div>
  );
}

export default App;
