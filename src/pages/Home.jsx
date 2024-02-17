// import icons
import { Fragment } from "react";
import Energy from "../Fragments/Home/Energy";
import Profile from "../Fragments/Home/Profile";
import Premium from "../Fragments/Home/Premium";
import Search from "../Fragments/Home/Search";
import NavMenu from "../Fragments/Home/NavMenu";
import LastAnime from "../Fragments/Home/LastAnime";
import Genres from "../Fragments/Home/Genres";
const Home = () => {
  return (
    <Fragment>
      {
        // Top Section Start
      }
      <section id="top" className="pt-8 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <Energy />
            <Profile />
            <Premium />
            <Search />
            <NavMenu />
            <LastAnime />
            <Genres />
          </div>
        </div>
      </section>
      {
        // Top Section End
      }
    </Fragment>
  );
};
export default Home;
