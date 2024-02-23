// import Layouts
import { Fragment, useEffect, useState } from "react";
import Top from "../Layouts/Home/Top";
import Main from "../Layouts/Home/Main";
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
      <Main />
      {
        // Main Section End
      }
    </Fragment>
  );
};
export default Home;
