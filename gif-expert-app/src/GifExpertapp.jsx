import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertapp = () => {
  const [categories, setCategories] = useState(["Angular", "Vue"]);
  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    // const item  =  [...categories, "svelte"]
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
