import Github from "../../Fragments/Github";
import BottomBar from "../../Fragments/Home/Main/BottomBar";
import NewAnime from "../../Fragments/Home/Main/NewAnime";
import PopularAnime from "../../Fragments/Home/Main/PopularAnime";
import RealeaseDate from "../../Fragments/Home/Main/RealeaseDate";
import RecAnime from "../../Fragments/Home/Main/RecAnime";

const Main = () => {
  return (
    <section id="main" className="pt-8">
      <div className="container">
        <div className="flex flex-wrap">
          <NewAnime />
          <RealeaseDate />
          <PopularAnime />
          <RecAnime />
          <BottomBar onActive={0} />
          <Github />
        </div>
      </div>
    </section>
  );
};
export default Main;
