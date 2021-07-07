import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Productsmenscreen from "./screens/productsmenscreen";
import Cartscreen from "./screens/cartscreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/mensproduct" element={<Productsmenscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
      </Routes>
    </div>
  );
}

export default App;
