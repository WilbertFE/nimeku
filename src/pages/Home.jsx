// import icons
import { GrRefresh } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
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
                <h1 className="text-white font-bold text-2xl">
                  Episode terbaru
                </h1>
                <GrRefresh className="w-[32px] h-[32px] text-secondary" />
                <h3 className="text-white font-bold ml-2 text-sm">
                  Lihat Jadwal
                </h3>
                <FaAngleRight className="text-white w-[22px] h-[22px] relative -top-[1px]" />
              </div>
              <div className="w-full flex flex-wrap px-2">
                <div className="w-1/3 flex flex-col">
                  <div className="w-full flex h-[150px] bg-third animate-pulse rounded-lg mb-1"></div>
                  <div className="flex gap-x-2 items-center">
                    <MdOutlineRemoveRedEye className="w-[16px] h-[16px] text-white" />
                    <p className="text-white">813</p>
                  </div>
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
