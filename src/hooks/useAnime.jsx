import { useEffect, useState } from "react";

export const useAnime = (id) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.jikan.moe/v4/anime/${id}/full`;
        const data = await fetch(url).then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        });
        setDetail(data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);
  return detail;
};
