import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Productsmenscreen from "./screens/productsmenscreen";
import Cartscreen from "./screens/cartscreen";
import Wishlistscreen from "./screens/wishlistscreen";
import Loginscreen from "./screens/loginscreen";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/mensproduct" element={<Productsmenscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/wishlist" element={<Wishlistscreen />} />
        <Route path="/login" element={<Loginscreen />} />
      </Routes>
    </div>
  );
}

export default App;
