/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
 
  return (
    <section id="food-display" className=" mt-8">
      <h2 className="h2-food font-semibold">
        Top dishes near you
      </h2>
      <div className="food-grid ">
        {
          food_list.map((food,i)=>{
            if(category === 'All' || category === food.category){
              return  <FoodItem key={i} food={food} id={food.id} />
            }
          })
        }
      </div>
    </section>
  );
};

export default FoodDisplay;
