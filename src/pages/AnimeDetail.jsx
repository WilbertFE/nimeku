import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import icons
import { FaArrowLeft } from "react-icons/fa6";
import Energy from "../Fragments/Home/Top/Energy";
import { IoEyeOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
// import hooks
import { useAnime } from "../hooks/useAnime";

const AnimeDetail = () => {
  const { id } = useParams();
  const detail = useAnime(id);
  const [more, setMore] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    if (!detail) return;

    if (localStorage.getItem("subscribedAnime")) {
      const animes = JSON.parse(localStorage.getItem("subscribedAnime")).find(
        (anime) => anime.mal_id === detail.main.mal_id
      );
      if (animes) {
        setSubscribe(true);
      } else {
        setSubscribe(false);
      }
    } else {
      return;
    }

    // const animes = JSON.parse(localStorage.getItem("subscribedAnime"));
    // console.log(animes);

    // if (animes) {
    //   setSubscribe(true);
    // } else {
    //   setSubscribe(false);
    // }
  }, [detail]);

  const handleSubscribe = (anime) => {
    if (subscribe === false) {
      setSubscribe(true);
      // atur localStorage
      const latestStorage =
        JSON.parse(localStorage.getItem("subscribedAnime")) || [];
      localStorage.subscribedAnime = JSON.stringify([...latestStorage, anime]);
    } else if (subscribe === true) {
      setSubscribe(false);
      const newLocalStorage = JSON.parse(
        localStorage.getItem("subscribedAnime")
      ).filter((item) => item.mal_id !== anime.mal_id);
      localStorage.subscribedAnime = JSON.stringify(newLocalStorage);
    }
  };

  return (
    <section id="detail" className="min-h-screen bg-slate-950 pb-32">
      <div className="container">
        <div className="flex flex-col">
          {detail && (
            <Fragment>
              <div
                className="flex items-start p-4 min-h-[300px] bg-cover bg-center mb-4"
                style={{
                  backgroundImage: `url(${detail.main.images.webp.large_image_url})`,
                }}
              >
                <div>
                  <Link to="/">
                    <FaArrowLeft className="text-white text-2xl mt-2" />
                  </Link>
                </div>
                <Energy />
              </div>
              <div className="flex flex-col gap-y-1 px-4 mb-3">
                <h1 className="text-xl text-white">{detail.main.title}</h1>
                <h3 className="text-secondary text-sm mb-2">
                  {detail.main.title_japanese}
                </h3>
                <div className="flex gap-x-1 items-center mb-2">
                  <IoEyeOutline className="text-white" />
                  <h3 className="text-white/80 mr-1">
                    {Math.floor(detail.main.members / 1000)}K Views
                  </h3>
                  <FaBell className="text-white" />
                  <h3 className="text-white/80">
                    {Math.floor(detail.main.scored_by / 1000)}K Subscribers
                  </h3>
                </div>
                <div className="flex items-centerm mb-2 gap-x-2">
                  <div className="flex gap-x-1">
                    <FaStar className="text-base text-secondary" />
                    <h3 className="text-white text-sm">{detail.main.score}</h3>
                  </div>
                  <h3 className="text-white text-sm">TV</h3>
                  <h3 className="text-white text-sm">
                    {detail.status === "Currently Airing"
                      ? "Airing"
                      : "Completed"}
                  </h3>
                  <h3 className="text-white text-sm">
                    {detail.main.aired.prop.from.day}-
                    {detail.main.aired.prop.from.month}-
                    {detail.main.aired.prop.from.year}
                  </h3>
                  <h3 className="text-white text-sm truncate">
                    {detail.main.studios[0].name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-2 mb-4">
                  {detail.main.genres.map((genre) => (
                    <h3
                      key={genre.mal_id}
                      className="text-white text-sm border border-secondary bg-transparent px-2 py-1 rounded-tl-lg rounded-full"
                    >
                      {genre.name}
                    </h3>
                  ))}
                </div>
              </div>
              <div className="flex flex-col px-4 mb-4">
                <div className="flex gap-x-6 mb-4">
                  <div
                    onClick={() => handleSubscribe(detail.main)}
                    className="w-1/2 flex gap-x-1 items-center justify-center bg-third text-white px-4 py-3 rounded-full cursor-pointer"
                  >
                    <FaBookmark
                      className={`relative -top-[1px] ${
                        subscribe ? "text-secondary" : "text-white"
                      }`}
                    />
                    {subscribe ? "Unsubscribe" : "Subscribe"}
                  </div>
                  <div className="w-1/2 flex gap-x-1 items-center justify-center bg-secondary text-slate-950 font-bold px-4 py-3 rounded-full">
                    <MdOutlineDateRange className="text-lg relative -top-[1px]" />
                    {detail.main.broadcast.day}
                  </div>
                </div>
                <div className="bg-third text-secondary text-sm p-3 text-center rounded-full">
                  Tekan Untuk Melihat Episode 1
                </div>
              </div>
              <div className="flex flex-col px-4 gap-y-2 mb-4">
                <h1 className="text-white text-xl">Sipnopsis</h1>
                <p className="text-white/70 text-sm">
                  {more
                    ? detail.main.synopsis.substring(
                        0,
                        detail.main.synopsis.length
                      )
                    : detail.main.synopsis.substring(0, 150)}
                </p>
                <span
                  onClick={() => setMore(!more)}
                  className="text-secondary text-sm self-start cursor-pointer"
                >
                  {more ? "Less" : "More..."}
                </span>
              </div>
              <div className="flex flex-col px-4">
                <h1 className="text-xl text-white mb-4">Trailer Anime</h1>
                <iframe
                  src={`${detail.main.trailer.embed_url}`}
                  allowFullScreen
                  className="border-0 w-full h-[200px] max-w-lg rounded-lg"
                ></iframe>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};
export default AnimeDetail;
