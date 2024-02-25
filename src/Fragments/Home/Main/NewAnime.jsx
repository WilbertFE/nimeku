// import icons
import { FaAngleRight } from "react-icons/fa6";
import { GrRefresh } from "react-icons/gr";
// import react
import { useEffect, useState } from "react";
import AnimeCard from "../../AnimeCard";

const NewAnime = () => {
  const [newAnimes, setNewAnimes] = useState(null);
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

      // fetch newAnime
      const newAnimesData = await fetchDataWithRetry(
        "https://api.jikan.moe/v4/seasons/now?limit=12&sfw=true"
      );
      setNewAnimes(newAnimesData);
    };
    fetchDataSequentially();
  }, []);
  return (
    <div className="w-full flex flex-wrap pb-4">
      <div className="w-full flex items-center gap-x-2 px-6 mb-4">
        <h1 className="text-white font-bold text-2xl min-w-max">
          Anime Terbaru
        </h1>
        <GrRefresh className="w-[32px] h-[32px] text-secondary" />
        <h3 className="text-white font-bold ml-2 text-xs min-w-max">
          Lihat Jadwal
        </h3>
        <FaAngleRight className="text-white w-[20px] h-[20px] relative -top-[1px]" />
      </div>
      <div className="w-full flex gap-y-3 px-1 flex-wrap">
        {newAnimes &&
          newAnimes.map((anime) => (
            <div key={anime.mal_id} className="w-1/3 flex flex-col px-1">
              <AnimeCard>
                <AnimeCard.Header anime={anime} isNew={true} />
                <AnimeCard.Body anime={anime} isPopular={true} />
                <AnimeCard.Footer anime={anime} />
              </AnimeCard>
            </div>
          ))}
      </div>
    </div>
  );
};
export default NewAnime;
