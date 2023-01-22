import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("dressCart")
    if(newCartData === []){
        return []
    }else if(newCartData === "null"){
        return []
    }
    else{
        return JSON.parse(newCartData)
    }
}

const initialState = {
    cart:getLocalCartData(),
    total_items:"",
    total_price:"",
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addtoCart = (item,count) => {
        dispatch({type:"ADD_TO_CART", payload:{item,count}})
    }

    const removeItem = (_id) => {
        dispatch({type:"REMOVE_ITEM", payload:_id})
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const setDecrease = (_id) => {
        dispatch({type:"SET_DECREASE", payload:_id})
    }

    const setIncrease = (_id) => {
        dispatch({type:"SET_INCREASE", payload:_id})
    }

    useEffect(() => {
        dispatch({ type: "CAR_TOTAL_ITEM" })
        dispatch({ type: "CAR_TOTAL_PRICE" })
        localStorage.setItem("dressCart", JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{...state, addtoCart, removeItem, clearCart, setDecrease, setIncrease }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }