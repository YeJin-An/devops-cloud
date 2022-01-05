import useFieldValues from "hooks/useFieldValues";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList() {
  const INITIAL_STATE = [
    { conent: "2022년에는 살빼기" },
    { conent: "파이썬 익히기" },
    { conent: "리액트 익히기" },
  ];

  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearfieldValues] = useFieldValues({
    content: "",
    color: "Darkgreen",
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((__, index) => index !== todoIndex)
    );
  };

  const appendTodo = () => {
    console.log("새로운 todo를 추가하겠습니다.");

    const todo = { ...fieldValues };

    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    clearfieldValues();
  };

  const changedInputText = (e) => {
    setInputText(e.target.value);
  };

  const appendInputText = (e) => {
    if (e.key === "Enter") {
      console.log("inputText: ", inputText);

      setTodoList((prevTodoList) => {
        return [...prevTodoList, { content: inputText }];
      });
      setInputText("");
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      />
      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}

      <TodoForm
        fieldValues={fieldValues}
        handleChange={handleChange}
        handleSubmit={appendTodo}
      />
    </div>
  );
}
export default TodoList;
