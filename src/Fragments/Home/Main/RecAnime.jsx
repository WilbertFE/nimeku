// import icons
import { FaAngleRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
// import react
import { useEffect, useState } from "react";

const RecAnime = () => {
  const [recAnime, setRecAnime] = useState(null);

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
      // fetch RecAnime
      const recAnime = await fetchDataWithRetry(
        "https://api.jikan.moe/v4/top/anime?sfw=true&filter=favorite&limit=25"
      );
      setRecAnime(recAnime);
    };
    fetchDataSequentially();
  }, []);

  return (
    <div className="w-full flex flex-wrap pb-32">
      <div className="w-full flex">
        <h1 className="text-white font-bold text-xl mb-4 px-4">
          Rekomendasi Anime
        </h1>
        <div className="flex-1 flex items-center justify-end relative -top-1 px-4">
          <h3 className="text-white font-bold text-xs">Lihat Semua</h3>
          <FaAngleRight className="text-white w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="hide-scrollbar flex overflow-auto gap-x-3 px-4">
        {recAnime &&
          recAnime.map((anime) => (
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

export default RecAnime;
