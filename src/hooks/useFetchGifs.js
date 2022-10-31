import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (searchValue) => {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
  });
  const getSearchedGifs = async (value) => {
    setData({ ...data, isLoading: true });
    const searchedGifs = await getGifs(value);
    setData({ data: searchedGifs, isLoading: false });
  };

  useEffect(() => {
    getSearchedGifs(searchValue);
  }, [searchValue]);
  return {
    isLoading: data.isLoading,
    data: data.data,
  };
};
