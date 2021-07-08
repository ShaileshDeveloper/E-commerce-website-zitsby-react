import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Productsmenscreen from "./screens/productsmenscreen";
import Cartscreen from "./screens/cartscreen";
import Wishlistscreen from "./screens/wishlistscreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/mensproduct" element={<Productsmenscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/wishlist" element={<Wishlistscreen />} />
      </Routes>
    </div>
  );
}

export default App;
