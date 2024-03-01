import { useEffect, useState } from "react";

export const useAnime = (id) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.jikan.moe/v4/anime/${id}/full`;
        const response = await fetch(url).then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        });
        const data = response.data;
        setDetail({
          main: data,
        });
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);
  return detail;
};
