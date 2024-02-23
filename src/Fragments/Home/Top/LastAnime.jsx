import { FaPlay } from "react-icons/fa";

const LastAnime = () => {
  return (
    <div className="w-full flex gap-x-4 items-start px-6 mb-6">
      <div className="w-[100px] h-[70px] bg-third rounded-md overflow-hidden">
        <img
          src="/nimeku/img/soloLeveling.jpg"
          alt="anime"
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <h3 className="text-secondary font-bold">Terakhir Ditonton</h3>
        <h4 className="text-white truncate">Solo Leveling</h4>
      </div>
      <div className="bg-third p-4 self-center rounded-lg">
        <FaPlay className="w-[16px] h-[16px] text-white" />
      </div>
    </div>
  );
};
export default LastAnime;
