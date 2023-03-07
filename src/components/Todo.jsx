import { useDispatch, useSelector } from "react-redux";
import { del } from "../features/todos/TodoSlice";
import { editTodo } from "../features/todos/TodoSlice";
import { toogleCompleted } from "../features/todos/TodoSlice";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  const [todoEdit, setTodoEdit] = useState(null);
  const [editingText, setEditingText] = useState("");
  const dispatch = useDispatch();
  const editarTodo = (id) => {
    if (todoEdit && editingText.trim() !== "") {
      dispatch(editTodo({ id, editingText }));
      setTodoEdit(null);
      setEditingText("");
    }
  };
  console.log("gola");
  return (
    <div className="list-group">
      {todos.map(({ txt, id, completed }) => (
        <li className="list-item" key={id}>
          {todoEdit === id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : (
            <>
              <input
                type="checkbox"
                className="checkbox"
                checked={completed}
                onChange={() => dispatch(toogleCompleted(id))}
              />
              <span className="text-tarea">{txt}</span>
            </>
          )}
          {todoEdit === id ? (
            <button className="btn-save" onClick={() => editarTodo(id)}>
              Guardar
            </button>
          ) : (
            <span className="btn-container">
              <button onClick={() => setTodoEdit(id)}>Editar</button>
              <button onClick={() => dispatch(del(id))}>Borrar</button>
            </span>
          )}
        </li>
      ))}
    </div>
  );
};

export default Todo;
