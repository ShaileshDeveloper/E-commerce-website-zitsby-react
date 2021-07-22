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
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

  
  export const promiseStripe = loadStripe('pk_test_51JG8UGSIuHxWcla8GAx9RXWLrlOe3iPWP4U5gjZFY4NnKFDwZnc4gIzBRqO3lOh07KGsXM2HU1AhA9PafNGdd9KN00Zq4CNChj');
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
        <Elements stripe={promiseStripe}>
        <Route path="/payment" element={<PaymentScreen />} />
        </Elements>
      </Routes>
    </div>
  );
}

export default App;
