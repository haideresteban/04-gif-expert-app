import { useState } from "react";

export const AddCategory = ({
  // setCategories
  onNewCategory
}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //evitar que se recargue toda la pagina
    const value = inputValue.trim();
    if (value.length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(value);
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
