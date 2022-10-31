import { useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { Loading } from "./Loading";

export const GifList = ({ searchValue }) => {
  const { isLoading, data } = useFetchGifs(searchValue);

  return (
    <div className="mt-3">
      <p className="title">
        Resultado de: <span>{searchValue}</span>
      </p>
      {isLoading && <Loading />}
      <div className="card-grid">
        {data && data.map((gif) => <GifItem key={gif.id} {...gif} />)}
      </div>
    </div>
  );
};
