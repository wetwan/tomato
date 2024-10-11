import { assets } from "../assets/assets";
import { footernav } from "../constance";

const Footers = () => {
  return (
    <footer
      id="footer"
      className="font-prata mt-28 scroll-smooth scroll-mt-28 text-[#d8d8d8] bg-[#333333] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] "
    >
      <div className="w-full lg:footer-grid flex flex-col gap-[35px]">
        <div className="footer-item">
          <div className=" mb-5">
            <img src={assets.logo} alt="" />
          </div>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tenetur ipsa quis aspernatur optio provident, quae
            officiis. Quasi, dicta eligendi?
          </p>
          <div className=" flex items-center mt-5 ">
            <div className=" w-10 mr-4 ">
              <img src={assets.facebook_icon} className="w-full" alt="" />
            </div>
            <div className=" w-10 mr-4 ">
              <img src={assets.twitter_icon} className="w-full" alt="" />
            </div>
            <div className=" w-10 mr-4 ">
              <img src={assets.linkedin_icon} className="w-full" alt="" />
            </div>
          </div>
        </div>

        <div className="footer-item">
          <h2 className="p-name mb-5 uppercase font-bold text-white">
            company
          </h2>
          <ul>
            {footernav.map((nav, i) => (
              <li
                className="capitalize mb-3 cursor-pointer"
                key={i}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {nav.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-item">
          <h2 className=" uppercase p-name mb-5 font-bold text-white">
            get in touch
          </h2>
          <ul>
            <li className="mb-3 cursor-pointer"> +234-901-2345-678</li>
            <li className="mb-3 cursor-pointer"> contact@tomato.com </li>
          </ul>
        </div>
      </div>
      <hr className="h-0.5 rounded-full  w-full my-5 mx-0 bg-gray-600 border-none" />
      <p className=" capitalize text-center">
        copyright {new Date().getFullYear()} &copy; Tomato - all right reserved
      </p>
    </footer>
  );
};

export default Footers;
