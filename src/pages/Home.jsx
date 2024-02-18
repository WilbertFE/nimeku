// import icons
import { GrRefresh } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { PiEye } from "react-icons/pi";
// import Layouts
import { Fragment } from "react";
import Top from "../Layouts/Top";

const Home = () => {
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
                  Episode terbaru
                </h1>
                <GrRefresh className="w-[32px] h-[32px] text-secondary" />
                <h3 className="text-white font-bold ml-2 text-xs min-w-max">
                  Lihat Jadwal
                </h3>
                <FaAngleRight className="text-white w-[20px] h-[20px] relative -top-[1px]" />
              </div>
              <div className="w-full flex gap-y-3 px-1 flex-wrap">
                <div className="w-1/3 flex flex-col px-1">
                  <div className="w-full h-[150px] bg-third rounded-lg mb-2"></div>
                  <div className="flex gap-x-1">
                    <PiEye className="text-white/70 w-4 h-4 mb-1" />
                    <p className="text-[10px] text-white/90">5,6K</p>
                  </div>
                  <h3 className="text-white text-xs line-clamp-2">
                    Seishun Buta Yarou wa: Odekake Sister no
                  </h3>
                </div>
                <div className="w-1/3 flex flex-col px-1">
                  <div className="w-full h-[150px] bg-third rounded-lg mb-2"></div>
                  <div className="flex gap-x-1">
                    <PiEye className="text-white/70 w-4 h-4 mb-1" />
                    <p className="text-[10px] text-white/90">5,6K</p>
                  </div>
                  <h3 className="text-white text-xs line-clamp-2">
                    Seishun Buta Yarou wa: Odekake Sister no
                  </h3>
                </div>
                <div className="w-1/3 flex flex-col px-1">
                  <div className="w-full h-[150px] bg-third rounded-lg mb-2"></div>
                  <div className="flex gap-x-1">
                    <PiEye className="text-white/70 w-4 h-4 mb-1" />
                    <p className="text-[10px] text-white/90">5,6K</p>
                  </div>
                  <h3 className="text-white text-xs line-clamp-2">
                    Seishun Buta Yarou wa: Odekake Sister no
                  </h3>
                </div>
                <div className="w-1/3 flex flex-col px-1">
                  <div className="w-full h-[150px] bg-third rounded-lg mb-2"></div>
                  <div className="flex gap-x-1">
                    <PiEye className="text-white/70 w-4 h-4 mb-1" />
                    <p className="text-[10px] text-white/90">5,6K</p>
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
