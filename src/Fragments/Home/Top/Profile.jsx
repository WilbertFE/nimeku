import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full flex items-center mb-6 gap-x-3 px-4">
      <div className="w-[56px] h-[56px] rounded-full bg-black overflow-hidden border border-white">
        <img src="" alt="profile" className="block w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <span className="text-white/80 text-sm">Welcome,</span>
        <h1 className="text-blue-600 underline truncate tracking-widest">
          <Link to="/login">Anda belum login</Link>
        </h1>
        <div className="flex items-center">
          <p className="text-white mr-2 tracking-wide">Lvl. 1</p>
          <span className="block flex-1 h-[5px] bg-fourth"></span>
          <p className="text-white ml-2">0%</p>
        </div>
      </div>
      <a href="#">
        <IoMdSettings className="w-[32px] h-[32px] text-secondary" />
      </a>
    </div>
  );
};

export default Profile;
