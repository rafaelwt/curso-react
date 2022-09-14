import React from "react";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("One punch");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
     event.preventDefault();
     if(inputValue.trim().length <= 1) return;
     // setCategories(cateories => [inputValue, ...cateories]);
     setInputValue('');
     onNewCategory(inputValue.trim());
   
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar ..."
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
