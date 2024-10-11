import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";


const PlaceoOrder = () => {
 
  const { getTotalCart } = useContext(StoreContext);
  const delivery = (getTotalCart() / 400) * 100;
  return (
    <form className=" mt-[200px] flex items-start justify-between gap-14">
      <div className="w-full from1">
      <p className="capitalize text-3xl mb-16 font-semibold"> delivery information </p>
      <div className="fromcheck-multi">
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="firstname"
        />
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="lastnmae"
        />
      </div>
      <input
        type="email"
        className="placeholder-shown:capitalize fromcheck border "
        placeholder="email"
      />
      <input
        type="text"
        className="placeholder-shown:capitalize fromcheck border "
        placeholder="address"
      />
      <div className="fromcheck-multi">
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="city"
        />
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="state"
        />
      </div>
      <div className="fromcheck-multi">
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="zipcode"
        />
        <input
          type="text"
          className="placeholder-shown:capitalize fromcheck border "
          placeholder="country"
        />
      </div>
      <input
        type="text"
        className="placeholder-shown:capitalize fromcheck border "
        placeholder="phone"
      />
      </div>
      

      <div className="from12 w-full">
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
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="uppercase text-white bg-[tomato] width mt-8"
          >
            proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceoOrder;
