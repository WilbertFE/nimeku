import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const LastAnime = () => {
  const [lastestAnime, setLatestAnime] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("last")) {
      setLatestAnime(JSON.parse(localStorage.getItem("last")));
    }
  }, []);
  const handleClick = () => {
    if (localStorage.getItem("last")) {
      const data = JSON.parse(localStorage.getItem("last"));
      window.location.href = `/nimeku/anime/${data.mal_id}`;
    } else {
      return;
    }
  };
  console.log(lastestAnime);
  return (
    <div className="w-full flex gap-x-4 items-start px-6 mb-6">
      <div className="w-[100px] h-[70px] bg-third rounded-md overflow-hidden">
        <img
          src={
            lastestAnime ? `${lastestAnime.images.webp.large_image_url}` : ""
          }
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <h3 className="text-secondary font-bold">Terakhir Ditonton</h3>
        <h4 className="text-white truncate">
          {lastestAnime ? `${lastestAnime.title}` : "Tidak ada"}
        </h4>
      </div>
      <div className="bg-third p-4 self-center rounded-lg">
        <FaPlay
          onClick={handleClick}
          className="text-white text-lg cursor-pointer"
        />
      </div>
    </div>
  );
};
export default LastAnime;
