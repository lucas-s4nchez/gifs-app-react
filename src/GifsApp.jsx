import { useState } from "react";
import { GifForm } from "./components/GifForm";
import { GifList } from "./components/GifList";

export const GifsApp = () => {
  const [value, setValue] = useState("");

  const handleNewSearch = (searchValue) => {
    setValue(searchValue);
  };

  return (
    <div className="container">
      <h1 className="my-3 text-center">GifsApp</h1>

      <GifForm onNewValue={handleNewSearch} />
      {value.trim().length > 1 && <GifList searchValue={value} />}
    </div>
  );
};
