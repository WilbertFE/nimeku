// import icons
import { GrRefresh } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
// import Layouts
import { Fragment, useEffect, useState } from "react";
import Top from "../Layouts/Top";

const Home = () => {
  // fetch new anime
  const [newAnimes, setNewAnimes] = useState(null);
  const [popularAnime, setPopularAnime] = useState(null);
  const [recAnime, setRecAnime] = useState(null);

  // fetch all data
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
      // fetch popularAnime
      const popularAnimeData = await fetchDataWithRetry(
        "https://api.jikan.moe/v4/top/anime?filter=airing&sfw=true&limit=25"
      );
      setPopularAnime(popularAnimeData);
      // fetch RecAnime
      const recAnime = await fetchDataWithRetry(
        "https://api.jikan.moe/v4/top/anime?sfw=true&filter=favorite&limit=25"
      );
      setRecAnime(recAnime);
    };
    fetchDataSequentially();
  }, []);

  return (
    <Fragment>
      {
        // Top Section Start
      }
      <Top />
      {
        // Top Section End
      }
      {
        // Main Section Start
      }
      <section id="main" className="pt-8 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
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
                    <div
                      key={anime.mal_id}
                      className="w-1/3 flex flex-col px-1"
                    >
                      <div className="w-full relative h-[150px] bg- rounded-md mb-2 bg-cover overflow-hidden">
                        <span className="text-primary absolute left-0 top-0 bg-secondary text-xs font-bold p-1 rounded-br-lg">
                          New
                        </span>
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
                      <h3 className="text-white text-xs line-clamp-2">
                        {anime.title}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full flex items-center px-8 pb-4">
              <div className="flex flex-col bg-third rounded-lg mr-4 py-2 px-3">
                <h1 className="text-secondary font-bold">Jadwal Rilis</h1>
                <p className="text-white/90 text-[11px]">Tidak tahu kapan</p>
                <p className="text-white/90 text-[11px]">anime rilis ?</p>
              </div>
              <div>
                <p className="text-white text-xs">Tekan di sini</p>
                <p className="text-white text-xs">untuk melihat jadwal</p>
              </div>
            </div>
            <div className="w-full flex flex-wrap pb-4">
              <h1 className="w-full text-white font-bold text-xl mb-4 px-4">
                Sedang Populer
              </h1>
              <div className="hide-scrollbar flex overflow-auto gap-x-3 px-4">
                {popularAnime &&
                  popularAnime.map((anime) => (
                    <div
                      key={anime.mal_id}
                      className="min-w-[150px] flex flex-col"
                    >
                      <div className="w-full relative h-[150px] bg- rounded-md mb-2 bg-cover overflow-hidden">
                        {/* <span className="text-primary tracking-widest absolute left-0 top-0 bg-secondary text-xs font-bold p-1 rounded-br-lg">
                          Airing
                        </span> */}
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
                      <h3 className="text-white text-sm line-clamp-2">
                        {anime.title}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full flex flex-wrap">
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
                    <div
                      key={anime.mal_id}
                      className="min-w-[150px] flex flex-col"
                    >
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
                      <h3 className="text-white text-sm line-clamp-2">
                        {anime.title}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        // Main Section End
      }
    </Fragment>
  );
};
export default Home;
