// import React from 'react'

import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <section className="scroll-smooth scroll-mt-28 my-auto mx-auto mt-28 store text-center font-medium " id="app-download">
      <p className=" capitalize">
        for better Experince dowmload <br className="" /> tomato app
        <div className=" flex mx-auto mt-10 store items-center w-fit">
          <div className="store-img hover:scale-105 ">
            <img className="w-ful" src={assets.play_store} alt="playstore" />
          </div>
          <div className="store-img hover:scale-105 ">
            <img className="w-ful" src={assets.app_store} alt="appstore" />
          </div>
        </div>
      </p>
    </section>
  );
};

export default AppDownload;
