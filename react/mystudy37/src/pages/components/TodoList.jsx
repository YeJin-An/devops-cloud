import { useState } from "react";

function TodoList() {
  const INITIAL_STATE = [
    { conent: "2022년에는 살빼기" },
    { conent: "파이썬 익히기" },
    { conent: "리액트 익히기" },
  ];

  const [todoList, setTodoList] = useState(INITIAL_STATE);

  return (
    <>
      <h2>TodoList</h2>
      {todoList.map((todo) => (
        <div>{todo.conent}</div>
      ))}
    </>
  );
}
export default TodoList;
