import { useState } from "react";
import TodoForm from "./TodoForm";
import "./TodoList.css";

function TodoList() {
  const INITIAL_STATE = [
    { conent: "2022년에는 살빼기" },
    { conent: "파이썬 익히기" },
    { conent: "리액트 익히기" },
  ];

  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((__, index) => index !== todoIndex)
    );
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
      <h2>TodoList</h2>

      <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      />
      {todoList.map((todo, index) => (
        <div onClick={() => removeTodo(index)}>{todo.content}</div>
      ))}
      <TodoForm />
    </div>
  );
}
export default TodoList;
