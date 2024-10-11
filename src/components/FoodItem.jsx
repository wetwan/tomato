/* eslint-disable react/prop-types */

import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ food, id }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  return (
    <div className=" w-full m-auto border-none rounded-2xl shadow-food duration-[0.3s] fade-ins">
      <div className=" relative">
        <img className="w-full image-food " src={food.image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-2xl "
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute right-4 bottom-4 flex p-2 items-center gap-3 rounded-full bg-white  ">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px]"
            />
            <p> {cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[30px]"
            />
          </div>
        )}
      </div>
      <div className="p-5 ">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[20px] font-medium ">{food.name}</p>
          <img
            src={assets.rating_starts}
            alt="rating-star"
            className="w-[70px]"
          />
        </div>
        <p className="text-xs text-[#686868]">{food.description}</p>
        <p className=" text-[tomato] text-xl font-medium my-3 mx-0  ">
          ${food.price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
