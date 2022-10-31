import { useState } from "react";

export const GifForm = ({ onNewValue }) => {
  const [formState, setFormState] = useState("");

  const onInputChange = ({ target }) => {
    setFormState(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = formState.trim();
    if (!newValue) {
      alert("Escribe algo");
      return;
    }
    onNewValue(newValue);
    setFormState("");
  };

  return (
    <form className="d-flex" onSubmit={onSubmit} data-testid="form">
      <input
        className="form-control"
        type="text"
        name="search"
        value={formState}
        placeholder="Buscar Gif..."
        onChange={onInputChange}
      />
    </form>
  );
};
