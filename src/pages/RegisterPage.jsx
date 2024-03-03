import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [isInvalid, setIsInvalid] = useState(null);
  const handleSubmit = (e) => {
    // reset
    e.preventDefault();

    if (
      !e.target.name.value.trim() ||
      !e.target.email.value.trim() ||
      !e.target.password.value.trim()
    ) {
      setIsInvalid(true);
      return;
    } else {
      // membuat data
      const data = {
        id: Date.now(),
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        level: 1,
      };
      // masukkan data
      localStorage.nimekuAccount = JSON.stringify(data);
      setIsInvalid(false);
      // pindahkan lokasi url
      window.location.href = "/nimeku/login";
    }
  };

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <div className="bg-primary flex justify-center items-center min-h-screen">
      <div className="bg-third flex flex-wrap min-w-[300px] max-w-xl flex-col shadow-lg rounded-lg p-4 mx-4">
        <div className="w-full flex flex-col mb-4">
          <h1 className="text-secondary font-bold text-2xl">Register</h1>
          <p className="text-white text-xs line-clamp-2">
            Welcome, please enter your details
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-wrap gap-y-4">
              <div className="w-full flex flex-col">
                <label htmlFor="name" className="text-white mb-2">
                  Name
                </label>
                <input ref={inputFocus} type="text" name="name" id="name" />
              </div>
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
                Register
              </button>
              {isInvalid && (
                <span className="text-red-500 w-full text-sm text-center">
                  Something goes wrong, fill it rightly!
                </span>
              )}
              <p className="w-full text-center mx-auto text-white text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
