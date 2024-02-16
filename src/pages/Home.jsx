// import icons
import { IoMdSettings } from "react-icons/io";

const Home = () => {
  return (
    // Top Section Start
    <section id="top" className="pt-24 bg-red-200/10">
      <div className="container">
        <div className="flex flex-wrap mx-4">
          <div className="flex w-full items-center">
            <div className="w-[56px] h-[56px] rounded-full bg-white">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="flex flex-col mx-3 flex-1 overflow-hidden">
              <span className="text-slate-200 text-sm">Welcome,</span>
              <h1 className="text-white truncate">Wilbert Bernardi</h1>
              <div className="flex items-center">
                <p className="text-white mr-2">Lvl. 1</p>
                <span className="block flex-1 h-[5px] bg-slate-400"></span>
                <p className="text-white ml-2">0%</p>
              </div>
            </div>
            <a href="#">
              <IoMdSettings className="w-[32px] h-[32px] text-secondary" />
            </a>
          </div>
        </div>
      </div>
    </section>
    // Top Section End
  );
};
export default Home;
