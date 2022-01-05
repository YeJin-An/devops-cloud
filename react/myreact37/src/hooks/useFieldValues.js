import { useState } from 'react';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // 함수 안 쓰고, 값 지정
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });

    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  };

  // TODO
  return [fieldValues, handleChange];
}
export default useFieldValues;
