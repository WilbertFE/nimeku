import { FaGithub } from "react-icons/fa";
const Github = () => {
  return (
    <a
      href="https://github.com/WilbertFE/nimeku"
      className="flex p-2 fixed bg-third bottom-24 right-4 rounded-lg"
    >
      <FaGithub className="m-auto text-4xl text-white" />
    </a>
  );
};
export default Github;
