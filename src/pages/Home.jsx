import { useState } from "react";
import Expolremenu from "../components/Expolremenu";
import Header from "../components/Header";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <section className=" scroll-smooth scroll-mt-28 mt-[100px]">
      <Header />
      <Expolremenu  category={category} setCategory={setCategory} />
      <FoodDisplay category={category}  />
      <AppDownload />
    </section>
  );
};

export default Home;
 