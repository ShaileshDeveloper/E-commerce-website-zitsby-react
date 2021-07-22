import { createContext, useContext, useReducer , useState } from "react";
import {datamenproducts} from "../Data/datahomepage";

const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(addToCart, { home: datamenproducts, cart: [] , wishlist:[], showFastDeliveryOnly:false , sortBy:null , showInventoryAll:true , user:null});
  const [searchItems ,setSearchInItems] = useState("");



  function addToCart(state, action) {
    let exist = state.cart.find((item) => item.id === action.item.id);
    let existwishlist = state.wishlist.find((item) => item.id === action.item.id);
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

         case "TOGGLE_INVENTORY":
         
          return (state = {
            ...state,
            showInventoryAll: !state.showInventoryAll
          });
  
        case "TOGGLE_DELIVERY":
          
          return (state = {
            ...state,
            showFastDeliveryOnly: !state.showFastDeliveryOnly
          });

          case "SORT":
            return {
              ...state,
              sortBy: action.payload
            };

          case "ADD_TO_WISHLIST":
             return {
               ...state,
               wishlist: existwishlist === undefined ? state.wishlist.concat(action.item) : state.wishlist
             }
          case "SET_USER":
            return {
              ...state, 
              user: action.user
            }


      default:
        break;
    }
  }

  return (
    <Cartcontext.Provider value={{ state, dispatch , searchItems , setSearchInItems}}>
      {children}
    </Cartcontext.Provider>
  );
}

export function Usecart() {
  return useContext(Cartcontext);
}
