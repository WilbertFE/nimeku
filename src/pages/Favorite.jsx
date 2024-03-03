import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import AnimeCard from "../Fragments/AnimeCard";
import BottomBar from "../Fragments/Home/Main/BottomBar";
import Github from "../Fragments/Github";

const Favorite = () => {
  const [subscribedAnimes, setSubscribedAnime] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("subscribedAnime")) return;

    // ambil data dari local storage
    const data = JSON.parse(localStorage.getItem("subscribedAnime"));
    // mengubah nilai state
    setSubscribedAnime(data);
  }, []);

  const handleDetail = (id, anime) => {
    window.location.href = `/nimeku/anime/${id}`;
    localStorage.last = JSON.stringify(anime);
  };

  console.log(subscribedAnimes);

  return (
    <section id="favorite" className="bg-primary min-h-screen pb-32">
      <div className="container">
        <div className="flex flex-col gap-y-4 py-4 mx-4">
          <div className="flex items-center justify-center">
            <FaBookmark className="text-white text-lg mr-2" />
            <h1 className="text-xl text-white">Subscribed Anime</h1>
          </div>
          <div className="flex">
            {subscribedAnimes && (
              <div className="w-full flex flex-wrap">
                {subscribedAnimes.map((anime) => (
                  <div
                    key={anime.mal_id}
                    onClick={() => handleDetail(anime.mal_id, anime)}
                    className="w-1/3 flex flex-col px-1 cursor-pointer"
                  >
                    <AnimeCard>
                      <AnimeCard.Header anime={anime} isNew={false} />
                      <AnimeCard.Body anime={anime} isPopular={false} />
                      <AnimeCard.Footer anime={anime} />
                    </AnimeCard>
                  </div>
                ))}
              </div>
            )}
            {!subscribedAnimes && (
              <div className="w-full text-center text-white/80 text-xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                Tidak ada anime yang di subscribe
              </div>
            )}
          </div>
          <BottomBar onActive={4} />
          <Github />
        </div>
      </div>
    </section>
  );
};

export default Favorite;
