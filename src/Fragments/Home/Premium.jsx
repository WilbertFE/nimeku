import { IoDiamond } from "react-icons/io5";

const Premium = () => {
  return (
    <div className="w-full flex gap-x-4 mb-6 px-4">
      <div className="w-2/5 flex flex-wrap bg-third p-2 rounded-lg">
        <div className="w-full flex items-center">
          <IoDiamond className="text-secondary w-[16px] h-[16px]" />
          <h1 className="ml-1 text-secondary font-bold">Premium</h1>
        </div>
        <p className="text-white text-xs">Capek liat iklan? Ayo beli premium</p>
      </div>
      <div className="w-3/5 flex items-center">
        <p className="text-white text-xs">
          Harga mulai dari 12 Ribu Tekan disini !
        </p>
      </div>
    </div>
  );
};

export default Premium;
