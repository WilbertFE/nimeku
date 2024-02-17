// import icons
import { IoMdSettings } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { Fragment } from "react";

const genres = [
  "Movie",
  "Action",
  "Adventure",
  "Comedy",
  "Demons",
  "Drama",
  "Ec*hi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Psychological",
  "Parody",
  "Police",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo Ai",
  "Shounen",
  "Slice of Life",
  "Sports",
  "Space",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
];

const Home = () => {
  return (
    <Fragment>
      {
        // Top Section Start
      }
      <section id="top" className="pt-8">
        <div className="container">
          <div className="flex flex-wrap mx-2">
            <div className="w-full flex mb-12 justify-end">
              <div className="flex bg-third p-2 rounded-lg">
                <AiFillThunderbolt className="text-secondary w-[30px] h-[30px]" />
                <p className="text-white font-bold ml-2">0 / 2</p>
              </div>
            </div>
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
            <div className="w-full flex items-center bg-third px-4 py-5 mb-6 rounded-lg">
              <FaSearch className="text-secondary mr-4 w-[20px] h-[20px]" />
              <input
                type="text"
                name="search-anime"
                id="search-anime"
                className="block bg-transparent placeholder:text-lg focus:outline-none focus:text-white"
                placeholder="Cari Anime"
              />
            </div>
            <div className="w-full flex flex-wrap mx-2">
              <div className="w-full flex justify-between mb-6">
                <div className="flex flex-col">
                  <h3 className="text-secondary font-bold text-2xl mb-1">
                    Anime
                  </h3>
                  <div className="w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-2xl mb-1">Berita</h3>
                  <div className="hidden w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-2xl mb-1">Musik</h3>
                  <div className="hidden w-4/5 h-[4px] bg-secondary mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-x-4 items-start mb-6">
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
          </div>
        </div>
      </section>
      {
        // Top Section End
      }

      {
        // Genres Section Start
      }
      <section id="genres" className="pb-32">
        <div className="flex flex-wrap">
          <h3 className="w-full text-white font-bold text-2xl mx-6 mb-4">
            Genre
          </h3>
          <div className="w-full flex gap-x-4 px-6 hide-scrollbar overflow-auto">
            {genres.map((genre) => (
              <h3
                key={genre}
                className="text-secondary font-bold bg-third py-3 px-4 min-w-max rounded-lg"
              >
                {genre}
              </h3>
            ))}
          </div>
        </div>
      </section>
      {
        //Genres Section End
      }
    </Fragment>
  );
};
export default Home;
