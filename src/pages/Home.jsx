// import icons
import { IoMdSettings } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    // Top Section Start
    <section id="top" className="pt-24 pb-32">
      <div className="container">
        <div className="flex flex-wrap mx-4">
          <div className="w-full flex items-center mb-6 gap-x-3">
            <div className="w-[56px] h-[56px] rounded-full bg-white overflow-hidden border border-white">
              <img
                src="/nimeku/img/profile.jpg"
                alt="profile"
                className="block w-full h-full"
              />
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
              <span className="text-white/80 text-sm">Welcome,</span>
              <h1 className="text-white truncate tracking-widest">
                Wilbert Bernardi
              </h1>
              <div className="flex items-center">
                <p className="text-white mr-2 tracking-wide">Lvl. 1</p>
                <span className="block flex-1 h-[5px] bg-fourth"></span>
                <p className="text-white ml-2">0%</p>
              </div>
            </div>
            <a href="#">
              <IoMdSettings className="w-[32px] h-[32px] text-secondary" />
            </a>
          </div>
          <div className="w-full flex gap-x-4 mb-6">
            <div className="w-2/5 flex flex-wrap bg-third p-2 rounded-lg">
              <div className="w-full flex items-center">
                <IoDiamond className="text-secondary w-[16px] h-[16px]" />
                <h1 className="ml-1 text-secondary font-bold">Premium</h1>
              </div>
              <p className="text-white text-xs">
                Capek liat iklan? Ayo beli premium
              </p>
            </div>
            <div className="w-3/5 flex items-center">
              <p className="text-white text-xs">
                Harga mulai dari 12 Ribu Tekan disini !
              </p>
            </div>
          </div>
          <div className="w-full flex items-center bg-third px-4 py-5 rounded-lg">
            <FaSearch className="text-secondary mr-4 w-[20px] h-[20px]" />
            <input
              type="text"
              name="search-anime"
              id="search-anime"
              className="block bg-transparent placeholder:text-lg focus:outline-none"
              placeholder="Cari Anime"
            />
          </div>
        </div>
      </div>
    </section>
    // Top Section End
  );
};
export default Home;
