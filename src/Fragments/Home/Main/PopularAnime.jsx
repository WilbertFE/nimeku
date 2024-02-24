// import react hooks
import { useEffect, useState } from "react";
import AnimeCard from "../../AnimeCard";

const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState(null);
  useEffect(() => {
    const fetchDataSequentially = async () => {
      const backoffDelay = 1000;
      const maxRetries = 5;
      let retries = 0;

      const fetchDataWithRetry = async (url) => {
        try {
          const response = await fetch(url);
          let data = null;
          if (response.status === 200) {
            data = await response.json();
          } else {
            throw new Error("Some error has happened");
          }
          return data.data;
        } catch (error) {
          console.log(error.message);
          if (retries < maxRetries) {
            retries++;
            await new Promise((resolve) =>
              setTimeout(resolve, backoffDelay * retries)
            );
            return fetchDataWithRetry(url);
          } else {
            throw new Error("Max retries exceeded");
          }
        }
      };
      // fetch popularAnime
      const popularAnimeData = await fetchDataWithRetry(
        "https://api.jikan.moe/v4/top/anime?filter=airing&sfw=true&limit=25"
      );
      setPopularAnime(popularAnimeData);
    };
    fetchDataSequentially();
  }, []);
  return (
    <div className="w-full flex flex-wrap pb-4">
      <h1 className="w-full text-white font-bold text-xl mb-4 px-4">
        Sedang Populer
      </h1>
      <div className="hide-scrollbar flex overflow-auto gap-x-3 px-4">
        {popularAnime &&
          popularAnime.map((anime) => (
            <div key={anime.mal_id} className="min-w-[150px] flex flex-col">
              <AnimeCard anime={anime} isNew={false} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularAnime;
