import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, removeFromCart, cartItems, getTotalCart } =
    useContext(StoreContext);
  const delivery = (getTotalCart() / 400) * 100;
  const navigate = useNavigate();
  return (
    <section className="mt-[150px] ">
      <div className="">
        <div className=" capitalize title">
          <p className="">items</p>
          <p className="">title</p>
          <p className="">price</p>
          <p className="">quantity</p>
          <p className="">total</p>
          <p className="">remove</p>
        </div>
        <br className="" />
        <hr className="" />
        {food_list.map((food, i) => {
          if (cartItems[food.id] > 0) {
            return (
              <div key={i} className="">
                <div className="title title-item">
                  <img src={food.image} alt="" className="w-12" />
                  <p className="">{food.name}</p>
                  <p className="">${food.price}</p>
                  <p className="">{cartItems[food.id]}</p>
                  <p className="">${food.price * cartItems[food.id]}</p>
                  <p
                    onClick={() => removeFromCart(food.id)}
                    className="cursor-pointer "
                  >
                    x
                  </p>
                </div>
                <hr className="bg-gray-300 h-0.5" />
              </div>
            );
          }
        })}
      </div>
      <div className=" mt-20 flex justify-between gap md:flex-row flex-col-reverse">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className=" capitalize text-2xl font-semibold"> card total</h2>
          <div className="">
            <div className="totals">
              <p className=""> subtotal</p>
              <p className="">${getTotalCart()}</p>
            </div>
            <hr className="my-3 mx-0 " />
            <div className="totals">
              <p className=""> delivery</p>
              <p className="">${delivery}</p>
            </div>
            <hr className="my-3 mx-0 " />
            <div className="totals">
              <b className=""> total</b>
              <b className="">${getTotalCart() + delivery}</b>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/order");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="uppercase text-white bg-[tomato] width"
          >
            proceed to checkout{" "}
          </button>
        </div>
        <div className="flex-1 justify-start md:justify-normal">
          <div className="">
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-3 flex justify-between items-center bg-[#ebebeb] rounded ">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent outline-none pl-3 placeholder-shown:text-black w-3/5"
              />
              <button className=" button"> submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
