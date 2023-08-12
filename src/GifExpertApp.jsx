import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);
  const onAddCategory = (newCategory) => {
    // setCategories(categories.concat("Manzana"));
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); //Desestructuración
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
