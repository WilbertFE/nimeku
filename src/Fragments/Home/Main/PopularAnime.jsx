// import icons
import { IoMdPerson } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
// import react hooks
import { useEffect, useState } from "react";

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
              <div className="w-full relative h-[150px] bg- rounded-md mb-2 bg-cover overflow-hidden">
                <span className="flex absolute top-0 right-0 items-center bg-primary px-2 py-1 rounded-tr-lg">
                  <IoStarSharp className="text-white w-3 h-3 mr-1" />
                  <p className="text-white text-xs">{anime.score}</p>
                </span>
                <h3 className="text-secondary font-bold absolute bottom-0 left-0 text-xs bg-primary px-2 py-1 rounded-bl-lg">
                  {anime.episodes} Eps
                </h3>
                <img
                  src={anime.images.webp.large_image_url}
                  alt={anime.title}
                  loading="lazy"
                  className="block w-full h-full object-cover text-white text-xs text-center"
                />
              </div>
              <div className="flex gap-x-1">
                <IoMdPerson className="text-white/70 w-4 h-4 mb-1" />
                <p className="text-[11px] text-white/90 flex-1">
                  {Math.round(anime.scored_by / 1000)}K
                </p>
                <FaFireFlameCurved className="text-red-600 w-4 h-4" />
                <p className="font-bold text-white text-[12px]">Rame</p>
              </div>
              <h3 className="text-white text-sm line-clamp-2">{anime.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularAnime;