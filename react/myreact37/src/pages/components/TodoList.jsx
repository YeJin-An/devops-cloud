import { useState } from 'react';

const INITIAL_STATE = [
  { contnet: '2022년에는 살빼기' },
  { contnet: '파이썬 익히기' },
  { contnet: '리액트 익히기' },
];

function TodoList() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  const changedInputText = (e) => {
    setInputText(e.targer.value);
  };

  const appendInputText = (e) => {
    console.log('e.key:', e.key);
    if (e.key === 'Enter') {
      console.log('inputText :', inputText);
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
        <div onClick={() => removeTodo(index)}>{todo.contnet}</div>
      ))}
    </>
  );
}

export default TodoList;
