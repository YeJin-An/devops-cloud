import { useState } from "react";

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
      // todoList 배열 끝에 inputText를 추가합니다.
      // inputText를 다시 비웁니다.

      console.log("inputText: ", inputText);

      // setTodoList에 함수를 넘기는 것.
      // todoList 상탯값을 변경하는 것은 아닙니다. (배열의 Push를 사용 x)
    }
  };

  return (
    <>
      <h2>TodoList</h2>

      <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      />
      {todoList.map((todo, index) => (
        <div onClick={() => removeTodo(index)}>{todo.conent}</div>
      ))}
    </>
  );
}
export default TodoList;
