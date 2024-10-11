/* eslint-disable react/prop-types */


import { assets } from "../assets/assets";

const LoginIn = ({ setShowLogin,currentState ,setCurrentState}) => {
 
  return (
    <section className="absolute z-50 w-full h-full bg-[#00000090] grid  font-prata ">
      <form className=" place-content-center form">
        <div className=" flex justify-between items-center text-black ">
          <h2 className=" capitalize text-2xl font-bold">{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="close"
            className="w-4 cursor-pointer "
          />
        </div>
        <div className="flex flex-col gap-5 ">
          {currentState === "login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="username"
              required
              className=" placeholder-shown:capitalize form-input"
            />
          )}

          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
            className=" placeholder-shown:capitalize form-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            className=" placeholder-shown:capitalize form-input"
          />
        </div>
        <button className="capitalize p-3 rounded text-white bg-[tomato] text-sm cursor-pointer ">
          {currentState === "login" ? "login" : "create an account"}
        </button>
        <div className=" flex items-start gap-2 -mt-3 ">
          <input type="checkbox" name="" id="" required className="mt-3" />
          <p className="">
            By continuing, I agree to the term of use & privacy policy
          </p>
        </div>
        {currentState === "login" ? (
          <p className="">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("sign up")}
              className="capitalize form-span"
            >
              {" "}
              click here
            </span>
          </p>
        ) : (
          <p className="">
            Already have an account
            <span
              onClick={() => setCurrentState("login")}
              className="capitalize form-span"
            >
              {" "}
              login here
            </span>
          </p>
        )}
      </form>
    </section>
  );
};

export default LoginIn;
