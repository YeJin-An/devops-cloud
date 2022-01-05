import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

const INITIAL_STATE = [
  { contnet: '2022년에는 살빼기' },
  { contnet: '파이썬 익히기' },
  { contnet: '리액트 익히기' },
];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange] = useFieldValues({
    content: '',
    color: 'Orange',
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  // const changedInputText = (e) => {
  //   setInputText(e.target.value);
  // };

  // const appendInputText = (e) => {
  //   console.log('e.key:', e.key);
  //   if (e.key === 'Enter') {
  //     // todoList 배열 끝에 inputText를 추가합니다.
  //     // inputText를 다시 비웁니다.
  //     console.log('inputText :', inputText);

  //     // setTodoList 에 함수를 넘기는 것.
  //     // todoList 상탯값을 변경하는 것은 아닙니다. (배열의 push를 사용 X)

  //     setTodoList((prevTodoList) => {
  //       return [...prevTodoList, { contnet: inputText }];
  //     });
  //     setInputText('');
  //   }
  // };

  return (
    <div className="todo-list">
      <h2>TodoList</h2>

      <TodoForm handleChange={handleChange} />
      <hr />
      {JSON.stringify(fieldValues)}

      <a className="bg-red-500 text-gray-100" onClick={()=>}>clear</a>

      {/* <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      /> */}

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
