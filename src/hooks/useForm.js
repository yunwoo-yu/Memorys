import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    handleInputChange,
  };
};
export default useForm;
