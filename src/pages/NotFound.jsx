import { TbError404 } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center md:flex-row max-w-xl">
        <TbError404 className="w-[100px] h-[100px] text-secondary md:mr-12" />
        <div className="flex flex-col">
          <h1 className="text-xl text-primary font-bold text-center">
            Page Not Found
          </h1>
          <p className="text-sm text-primary text-center">
            Sorry, but we cant find the page you are looking for...
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
