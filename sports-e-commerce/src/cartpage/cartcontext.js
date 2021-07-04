import {createContext , useState , useContext} from "react"


const Cartcontext = createContext();


export function CartProvider({children}){

const [itemsInCart , setItemsInCart] = useState([]);

    return <Cartcontext.Provider value ={{itemsInCart , setItemsInCart}}>
    {children}
    </Cartcontext.Provider>
}


export function Usecart(){
    return useContext(Cartcontext)
}

