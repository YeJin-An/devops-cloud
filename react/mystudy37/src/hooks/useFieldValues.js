import { useState } from "react";

function useFieldValues() {
  const [fieldvalues, setFieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("changed", name, value);

    setFieldValues({
      ...fieldvalues,
      [name]: value,
    });
  };

  return [fieldvalues, handleChange];
}

export default useFieldValues;
