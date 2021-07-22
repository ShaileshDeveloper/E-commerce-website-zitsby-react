import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./payment.css";
import { useState } from "react";
import { Usecart } from "../cartpage/cartcontext";
function Payment() {
  const { state } = Usecart();

  let totalprice = state.cart.reduce(
    (acc, person) => acc + (person.quantity * person.price + person.price),
    0
  );
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const formSubmitHandler = () => {};
  const cardDetailsHandler = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <div className="payment__details__container">
        <h3>Payment-details</h3>
        <form onSubmit={formSubmitHandler}>
          <CardElement onChange={(e) => cardDetailsHandler(e)} />
          <div className="payment__price__details"><h4>Order Total  </h4><span>Rs{totalprice}</span></div>
        </form>
      </div>
    </>
  );
}

export default Payment;
