import { useEffect, useState } from "react";
import BottomBar from "../Fragments/Home/Main/BottomBar";

const History = () => {
  const [lastAnime, setLastAnime] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("last")) {
      setLastAnime(JSON.parse(localStorage.getItem("last")));
    }
  }, []);

  return (
    <section id="history" className="bg-primary min-h-screen pb-32">
      <div className="container p-4">
        <div className="flex flex-wrap">
          <div className="w-full mb-12 flex justify-center items-center gap-x-2 text-white text-xl">
            <ion-icon name="time-outline"></ion-icon>
            <h1>Riwayat Menonton</h1>
          </div>
          {lastAnime && (
            <div className="w-full flex-col">
              <div className="flex flex-col">
                <h3 className="text-white font-medium text-xl mb-6">
                  Terakhir ditonton
                </h3>
                <div className="flex">
                  <div className="flex items-center flex-col mr-2 mt-2">
                    <span className="text-white">
                      <ion-icon name="time-outline"></ion-icon>
                    </span>
                    <h3 className="text-white text-xs">00:00</h3>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-[75px] h-[100px] bg-black rounded-lg mr-2 overflow-hidden">
                      <img
                        src={lastAnime.images.webp.large_image_url}
                        alt={lastAnime.title}
                        className="w-full h-full object-cover object-center text-white"
                      />
                    </div>
                    <div className="flex flex-1 flex-col mt-2">
                      <h1 className="text-white line-clamp-2">
                        {lastAnime.title}
                      </h1>
                      <h3 className="text-white text-sm">
                        Eps {lastAnime.episodes}
                      </h3>
                      <h3 className="text-white text-sm">00:00 / 00:00</h3>
                      <div className="h-[2px] bg-secondary/50">
                        <div className="h-full w-1/12 bg-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <BottomBar onActive={3} />
        </div>
      </div>
    </section>
  );
};

export default History;
