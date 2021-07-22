import React from "react";
import "./cart.css";
import { Usecart } from "./cartcontext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state, dispatch } = Usecart();

  let navigate = useNavigate();
  let totalprice = state.cart.reduce(
    (acc, person) => acc + (person.quantity * person.price + person.price),
    0
  );

  return (
    <>
      <div className="cart__container">
        <div className="cart__product__detail__section">
          {state.cart.map((item) => {
            return (
              <>
                <div className="cart__product">
                  <div className="cart__product__image__container">
                    <img src={item.image} alt="ss" />
                  </div>
                  <div className="cart__product__description__container">
                    <div className="span__container">
                      <span> Price: $ {item.price} </span>
                      <span>
                        <small> {item.product} </small>
                      </span>
                    </div>
                    <div className="cart__product__button__container">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            item,
                          })
                        }
                      >
                        +
                      </button>
                      {item.quantity + 1}
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            item,
                          })
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", item })
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="cart__price__detail__section">
          <div className="cart__price__total">
            Total price <span> Rs {totalprice} </span>
          </div>
          <div className="cart__quantity__total">
            Total items <span> {state.cart.length} </span>
          </div>
          <div className="cart__checkout__button">
            <button onClick={(e) => navigate("/payment")}>
              Proceed to checkouts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
