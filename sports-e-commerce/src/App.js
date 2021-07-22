import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Productsmenscreen from "./screens/productsmenscreen";
import Cartscreen from "./screens/cartscreen";
import Wishlistscreen from "./screens/wishlistscreen";
import Loginscreen from "./screens/loginscreen";
import { auth } from "./firebase";
import { Usecart } from "./cartpage/cartcontext";
import PaymentScreen from "./screens/paymentscreen"
function App() {
  const { dispatch } = Usecart();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/mensproduct" element={<Productsmenscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/wishlist" element={<Wishlistscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </div>
  );
}

export default App;
