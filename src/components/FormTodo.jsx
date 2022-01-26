import React, { useState } from "react";
import "./FormTodo.css";
const FormTodo = ({ onSubmit }) => {
  const [inputTarea, setInputTarea] = useState("");

  const handleChange = (e) => {
    setInputTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTarea.trim() !== "") {
      onSubmit(inputTarea);

      setInputTarea("");
    } else {
      alert("input vacío");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputTarea}
        onChange={handleChange}
        className="input-form"
      />
      <input type="submit" value="Guardar" className="input-submit" />
    </form>
  );
};

export default FormTodo;
