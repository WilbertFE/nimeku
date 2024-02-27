import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import icons
import { FaArrowLeft } from "react-icons/fa6";
import Energy from "../Fragments/Home/Top/Energy";
import { IoEyeOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const AnimeDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.jikan.moe/v4/anime/${id}/full`;
        const data = await fetch(url).then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        });
        console.log(data.data);
        setDetail(data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);

  return (
    <section id="detail" className="min-h-screen bg-slate-950">
      <div className="container">
        <div className="flex flex-col">
          {detail && (
            <Fragment>
              <div
                className="flex items-start p-4 min-h-[300px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${detail.images.webp.large_image_url})`,
                }}
              >
                <div>
                  <Link to="/">
                    <FaArrowLeft className="text-white text-2xl mt-2" />
                  </Link>
                </div>
                <Energy />
              </div>
              <div className="flex flex-col gap-y-1 px-4 truncate">
                <h1 className="text-xl text-white truncate">{detail.title}</h1>
                <h3 className="text-secondary text-sm mb-2">
                  {detail.title_japanese}
                </h3>
                <div className="flex gap-x-1 items-center mb-2">
                  <IoEyeOutline className="text-white" />
                  <h3 className="text-white/80 mr-1">
                    {detail.members / 1000} Views
                  </h3>
                  <FaBell className="text-white" />
                  <h3 className="text-white/80">
                    {detail.scored_by / 1000} Subscribers
                  </h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="flex gap-x-1">
                    <FaStar className="text-base text-secondary" />
                    <h3 className="text-white text-sm">{detail.score}</h3>
                  </div>
                  <h3 className="text-white text-sm">TV</h3>
                  <h3 className="text-white text-sm">
                    {detail.status === "Currently Airing"
                      ? "Airing"
                      : "Completed"}
                  </h3>
                  <h3 className="text-white text-sm">
                    {detail.aired.prop.from.day}-{detail.aired.prop.from.month}-
                    {detail.aired.prop.from.year}
                  </h3>
                  <h3 className="text-white text-sm truncate">
                    {detail.studios[0].name}
                  </h3>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};
export default AnimeDetail;
