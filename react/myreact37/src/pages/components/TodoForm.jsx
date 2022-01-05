import { useState } from 'react';

function TodoForm() {
  const [fieldValues, setFieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('changed', name, value);

    // 함수 안 쓰고, 값 지정
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };
  return (
    <>
      <h2>TodoForm</h2>

      <input
        type="text"
        className="border-1 border-gray-400"
        onChange={handleChange}
        name="content"
      />

      <select onChange={handleChange} name="color">
        <option>Amber</option>
        <option>orange</option>
        <option>Yellow</option>
      </select>

      <hr />
      {JSON.stringify(fieldValues)}
    </>
  );
}
export default TodoForm;
