import Energy from "../../Fragments/Home/Top/Energy";
import Profile from "../../Fragments/Home/Top/Profile";
import Premium from "../../Fragments/Home/Top/Premium";
import Search from "../../Fragments/Home/Top/Search";
import NavMenu from "../../Fragments/Home/Top/NavMenu";
import LastAnime from "../../Fragments/Home/Top/LastAnime";
import Genres from "../../Fragments/Home/Top/Genres";

const Top = () => {
  return (
    <section id="top" className="pt-8">
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
  );
};
export default Top;
