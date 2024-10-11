/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin, currentState }) => {
  const { getTotalCart } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  return (
    <nav className="py-5 fixed top-0 z-50 left-0 bg-white px-0 flex justify-around w-full items-center  gap-[15px]">
      <Link to="/" className=" md:w-[150px] w-[120px] ">
        <img src={assets.logo} className="w-full h-auto " alt="logo" />
      </Link>
      <ul className="md:flex hidden items-center gap-5 capitalize">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : "notactive"}
        >
          home
        </Link>
        <a
          href="#explore-memu"
          onClick={() => setMenu("explore-memu")}
          className={menu === "explore-memu" ? "active" : "notactive"}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("app-download")}
          className={menu === "app-download" ? "active" : "notactive"}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("footer")}
          className={menu === "footer" ? "active" : "notactive"}
        >
          {" "}
          contact
        </a>
      </ul>

      <div className=" flex items-center md:gap-10 gap-5">
        <div className="w-5">
          <img className="w-full " src={assets.search_icon} alt="search" />
        </div>
        <Link to="/cart" className="relative " 
           onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className="w-5" src={assets.basket_icon} alt="" />
          <div
            // className=" absolute min-w-4 text-xs text-center min-h-4 bg-[tomato] rounded-xl -top-3 -right-3"
            className={
              getTotalCart() == 0
                ? ""
                : "absolute min-w-4 text-xs text-center min-h-4 bg-[tomato] rounded-xl -top-3 -right-3"
            }
          ></div>
        </Link>
        <button
          onClick={() => {
            setShowLogin(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="border md:py-3 py-2 px-5  md:px-8 rounded-full cursor-pointer hover:bg-[#fff4f2]  duration-[0.3s] capitalize  border-[tomato]  bg-transparent text-[15px] text-nowrap md:text-[16px]"
        >
          {currentState === "login" ? "log out" : "sign in"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
