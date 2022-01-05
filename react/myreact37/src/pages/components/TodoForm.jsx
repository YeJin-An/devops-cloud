import { useState } from 'react';

function TodoForm({ fieldValues, handlechange, handleSubmit }) {
  const [fieldValues, setFieldValues] = useState({});

  const clearFieldvalues = () => setFieldValues({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('changed', name, value);

    // 함수 안 쓰고, 값 지정
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
    return [fieldValues, handleChange, clearFieldValues];
  };
  return (
    <div>
      <h2>TodoForm</h2>

      <input
        type="text"
        className="border-1 border-gray-400"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
      />
      <button onClick={() => handleSubmit()}>저장</button>

      <select onChange={handleChange} name="color">
        <option>Amber</option>
        <option>orange</option>
        <option>Yellow</option>
      </select>

      <hr />
      {JSON.stringify(fieldValues)}
    </div>
  );
}
export default TodoForm;
