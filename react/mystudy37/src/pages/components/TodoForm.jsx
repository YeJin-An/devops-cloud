import { useState } from "react";

function TodoForm() {
  const [fieldValues, setFieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };
  return (
    <>
      <br />
      <h2>TodoForm</h2>

      <input type="text" onChange={handleChange} name="목표는" />
      <select>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </select>
      <hr />
      {JSON.stringify(fieldValues)}
    </>
  );
}
export default TodoForm;
