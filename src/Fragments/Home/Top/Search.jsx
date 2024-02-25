import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="w-full mx-4">
      <Link to="/search">
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
      </Link>
    </div>
  );
};

export default Search;
