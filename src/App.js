import "./App.css";
import { useState } from "react";
import { Link, HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout";
import config from "./config";
import ToS from "./components/ToS.jsx";
import Darkhome from "./components/Darkhome";
import DarkCheckout from "./components/DarkCheckout";

function App() {
  function handleFishChosen(id) {
    setChosenFish([
      ...chosenFish,
      config.fish.find(function (fish) {
        return fish.id === id;
      }),
    ]);
  }
  const [chosenFish, setChosenFish] = useState([]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Homepage onFishChosen={handleFishChosen} />}
          />
          <Route
            path="/checkout"
            element={<Checkout chosenFish={chosenFish} />}
          />
          <Route
            path="/Darkhome"
            element={<Darkhome onFishChosen={handleFishChosen} />}
          />
          <Route
            path="/Darkcheckout"
            element={<DarkCheckout chosenFish={chosenFish} />}
          />

          <Route path="/ToS" element={<ToS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
