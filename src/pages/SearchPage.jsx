import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimeCard from "../Fragments/AnimeCard";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [animes, setAnimes] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // guard
    if (searchValue === "") {
      setAnimes(null);
      setIsLoad(false);
      return;
    }

    // loading
    setIsLoad(true);

    const getData = async () => {
      try {
        const url = `https://api.jikan.moe/v4/anime?sfw&unapproved&limit=25&order_by=scored_by&rating=pg13&q=${searchValue}`;
        const data = await fetch(url).then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        });
        setIsLoad(false);
        setAnimes(data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, [searchValue]);

  const handleClick = (id, anime) => {
    window.location.href = `/nimeku/anime/${id}`;
    localStorage.last = JSON.stringify(anime);
  };

  const handleSearch = (e) => {
    // reset
    e.preventDefault();
    // ubah data
    const value = e.target.animeSearch.value;
    setSearchValue(value);
  };

  // use ref
  const focusSearch = useRef(null);

  useEffect(() => {
    focusSearch.current.focus();
  }, []);

  return (
    <section id="search" className="min-h-screen bg-primary">
      <div className="container p-4">
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-6 mb-8">
            <Link to="/">
              <FaArrowLeft className="text-white text-xl" />
            </Link>
            <form onSubmit={(e) => handleSearch(e)} className="relative">
              <input
                type="text"
                name="anime-search"
                id="animeSearch"
                placeholder="Tulis anime yang mau dicari"
                ref={focusSearch}
                className="block w-full bg-third h-[50px] rounded-lg px-3 focus:outline-none text-white"
              />
              <button type="submit">
                <FaSearch className="absolute right-3 top-3 text-secondary text-xl cursor-pointer" />
              </button>
            </form>
          </div>
          {animes && !isLoad ? (
            <div className="flex flex-wrap gap-y-4">
              {animes.map((anime, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(anime.mal_id, anime)}
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
          ) : null}
          {isLoad && (
            <div className="w-[50px] h-[50px] self-center mt-32 bg-transparent border border-white border-l-transparent border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      </div>
    </section>
  );
};
export default SearchPage;
