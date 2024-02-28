import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("nimekuAccount")) {
      const accountData = JSON.parse(localStorage.getItem("nimekuAccount"));
      setAccount(accountData);
    }
  }, []);

  return (
    <div className="w-full flex items-center mb-6 gap-x-3 px-4">
      <div className="w-[56px] h-[56px] rounded-full bg-black overflow-hidden border border-white">
        <img src="" alt="profile" className="block w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <span className="text-white/80 text-sm">Welcome,</span>
        {account && (
          <h1 className="text-white tracking-widest truncate">
            {account.name}
          </h1>
        )}
        {!account && (
          <Link to="/login">
            <h1 className="text-blue-600 tracking-widest truncate underline">
              Anda Belum Login
            </h1>
          </Link>
        )}
        <div className="flex items-center">
          <p className="text-white mr-2 tracking-wide">
            Lvl. {account && account.level}
          </p>
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
