import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [searchAnime, setSearchAnime] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const url = ``;
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSearch();
  }, [value]);

  return (
    <div className="container bg-primary min-h-screen">
      <div className="flex flex-wrap mx-4">
        <div className="w-full flex flex-col mt-6">
          <Link to="/">
            <FaArrowLeft className="text-white text-xl mb-6" />
          </Link>
          <input
            type="text"
            name="search-anime"
            id="search-anime"
            placeholder="Tulis anime yang mau dicari"
            className="w-full h-[50px] bg-third focus:outline-none p-4 text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
