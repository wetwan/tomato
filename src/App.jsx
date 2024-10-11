import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";
import PlaceoOrder from "../src/pages/PlaceoOrder";
import Footers from "./components/Footers";
import { useState } from "react";
import LoginIn from "./components/LoginIn";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentState, setCurrentState] = useState("login");
  return (
    <>
      {showLogin ? (
        <LoginIn
          setShowLogin={setShowLogin}
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
      ) : (
        <></>
      )}
      <div className="w-[80%] m-auto font-outfit">
        <Navbar
          setShowLogin={setShowLogin}
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceoOrder />} />
        </Routes>
      </div>
      <Footers />
    </>
  );
};

export default App;
