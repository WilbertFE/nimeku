// import Layouts
import Top from "../Layouts/Home/Top";
import Main from "../Layouts/Home/Main";
const Home = () => {
  return (
    <div className="bg-primary">
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
      <Main />
      {
        // Main Section End
      }
    </div>
  );
};
export default Home;
