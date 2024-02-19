// import icons
import { GrRefresh } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
// import Layouts
import { Fragment, useEffect, useState } from "react";
import Top from "../Layouts/Top";

const Home = () => {
  const [newestEpisode, setNewestEpisode] = useState(null);

  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/api.myanimelist.net:443/v2/anime/season/2024/winter?fields=id,title,main_picture,mean,num_list_users,status&limit=12`;
    const clientID = "7b7781c2940fd9b3a21e580a261e220d";

    const data = fetch(url, {
      method: "GET",
      headers: {
        "X-MAL-CLIENT-ID": clientID,
      },
    })
      .then((response) => response.json())
      .then((response) => response);
    setNewestEpisode(data);
  }, []);

  console.log(newestEpisode);

  return (
    <Fragment>
      {
        // Top Section Start
      }
      <Top />
      {
        // Top Section End
      }
      {
        // Main Section Start
      }
      <section id="main" className="pt-8">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap">
              <div className="w-full flex items-center gap-x-2 px-6 mb-4">
                <h1 className="text-white font-bold text-2xl min-w-max">
                  Episode Terbaru
                </h1>
                <GrRefresh className="w-[32px] h-[32px] text-secondary" />
                <h3 className="text-white font-bold ml-2 text-xs min-w-max">
                  Lihat Jadwal
                </h3>
                <FaAngleRight className="text-white w-[20px] h-[20px] relative -top-[1px]" />
              </div>
              <div className="w-full flex gap-y-3 px-1 flex-wrap">
                <div className="w-1/3 flex flex-col px-1">
                  <div className="w-full relative h-[150px] bg-third rounded-lg mb-2">
                    <span className="text-primary absolute left-0 top-0 bg-secondary text-xs font-bold p-1 rounded-br-lg">
                      New
                    </span>
                    <span className="flex absolute top-0 right-0 items-center bg-primary px-2 py-1 rounded-tr-lg">
                      <IoStarSharp className="text-white w-3 h-3 mr-1" />
                      <p className="text-white text-xs">7.55</p>
                    </span>
                    <h3 className="text-secondary font-bold absolute bottom-0 left-0 text-xs bg-primary px-2 py-1 rounded-bl-lg">
                      Eps 13
                    </h3>
                  </div>
                  <div className="flex gap-x-1">
                    <IoMdPerson className="text-white/70 w-4 h-4 mb-1" />
                    <p className="text-[11px] text-white/90 flex-1">5,6K</p>
                    <FaFireFlameCurved className="text-red-600 w-4 h-4" />
                    <p className="font-bold text-white text-[12px]">Rame</p>
                  </div>
                  <h3 className="text-white text-xs line-clamp-2">
                    Seishun Buta Yarou wa: Odekake Sister no
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        // Main Section End
      }
    </Fragment>
  );
};
export default Home;
