import { useState } from 'react';

const INITIAL_STATE = [
  { contnet: '2022년에는 살빼기' },
  { contnet: '파이썬 익히기' },
  { contnet: '리액트 익히기' },
];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  return (
    <>
      <h2>TodoList</h2>
      {todoList.map((todo, index) => (
        <div onClick={() => removeTodo(index)}>{todo.contnet}</div>
      ))}
    </>
  );
}

export default TodoList;
