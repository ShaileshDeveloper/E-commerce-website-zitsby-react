import { createContext, useContext, useReducer } from "react";
import data from "../Data/datahomepage";

const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(addToCart, { home: data, cart: [] });

  function addToCart(state, action) {
    let exist = state.cart.find((item) => item.id === action.item.id);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart:
            exist === undefined
              ? state.cart.concat(action.item)
              : state.cart.map((item) => {
                  if (item.id === action.item.id) {
                    return { ...item, quantity: item.quantity + 1 };
                  } else {
                    return item;
                  }
                }),
        };

      case "INCREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };

      case "DECREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.item.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

        case "REMOVE_FROM_CART":
         return {
             ...state , 
             cart: state.cart.filter((item) => item.id !== action.item.id)
         }

      default:
        break;
    }
  }

  return (
    <Cartcontext.Provider value={{ state, dispatch }}>
      {children}
    </Cartcontext.Provider>
  );
}

export function Usecart() {
  return useContext(Cartcontext);
}
