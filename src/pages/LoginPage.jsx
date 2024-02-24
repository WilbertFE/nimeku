import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isInvalid, setIsInvalid] = useState(null);
  const handleSubmit = (e) => {
    // reset
    e.preventDefault();

    if (!e.target.email.value.trim() || !e.target.password.value.trim()) {
      setIsInvalid(true);
      return;
    } else {
      // ambil data
      const nimekuAccount = JSON.parse(localStorage.getItem("nimekuAccount"));
      console.log("ok");
      if (
        nimekuAccount &&
        e.target.email.value === nimekuAccount.email &&
        e.target.password.value === nimekuAccount.password
      ) {
        window.location.href = "/nimeku/";
      } else {
        setIsInvalid(true);
        return;
      }
    }
  };
  return (
    <div className="bg-primary flex justify-center items-center min-h-screen">
      <div className="bg-third flex flex-wrap min-w-[300px] max-w-xl flex-col shadow-lg rounded-lg p-4 mx-4">
        <div className="w-full flex flex-col mb-4">
          <h1 className="text-secondary font-bold text-2xl">Login</h1>
          <p className="text-white text-xs line-clamp-2">
            Welcome, please enter your details
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-wrap gap-y-4">
              <div className="w-full flex flex-col">
                <label htmlFor="email" className="text-white mb-2">
                  Email
                </label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="password" className="text-white mb-2">
                  Password
                </label>
                <input type="password" name="password" id="password" />
              </div>
              <button
                type="submit"
                className="block w-full bg-secondary text-white rounded-md py-2 mt-4"
              >
                Login
              </button>
              {isInvalid && (
                <span className="w-full text-red-500 text-sm text-center">
                  Something goes wrong, fill it rightly
                </span>
              )}
              <p className="text-center mx-auto text-white text-sm">
                Dont have account?{" "}
                <Link to="/register" className="text-secondary">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
