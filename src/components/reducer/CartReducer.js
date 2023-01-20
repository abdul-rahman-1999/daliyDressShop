
let CartReducer = (state,action) => {

    if(action.type === "ADD_TO_CART"){

    let { item,count } = action.payload;

    const existingProduct = state.cart.find(
        (cur) => cur._id === item._id
    )
    
    if(existingProduct){

        let updatedProduct = state.cart.map((cur) => {
            if(cur._id === item._id){
                let newQuantity = cur.quantity + count
                return {
                    ...cur,
                    quantity : newQuantity
                }
            }else{
                return cur
            }
        })

        return {
            ...state,
            cart:updatedProduct
        }

    }else{

        let cartProduct;

        cartProduct = {
            _id:item._id,
            name:item.name,
            image:item.img,
            price:item.price,
            color:item.color,
            quantity:count
        };
    
        return {
            ...state,
            cart:[...state.cart, cartProduct]
        }

    }
         
    }

    if(action.type === "SET_DECREASE"){
        let updatedCart = state.cart.map((cur) => {
            if(cur._id === action.payload){
                let decreamentAmount = cur.quantity - 1
                if(decreamentAmount === 0){
                    decreamentAmount = cur.quantity - 0
                }
                return {
                    ...cur,
                    quantity : decreamentAmount
                }
            }else{
                return cur;
            } 
        })
        return {
            ...state,
            cart : updatedCart
        }
    }

    if(action.type === "SET_INCREASE"){
        let updatedCart = state.cart.map((cur) => {
            if(cur._id === action.payload){
                let decreamentAmount = cur.quantity + 1
                return {
                    ...cur,
                    quantity : decreamentAmount
                }
            }else{
                return cur;
            } 
        })
        return {
            ...state,
            cart : updatedCart
        }
    }

    if(action.type === "REMOVE_ITEM"){

        let updatedItems = state.cart.filter((cur) => cur._id !== action.payload)

        return {
            ...state,
            cart : updatedItems
        }
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart : [],
        }
    }

        if(action.type === "CAR_TOTAL_ITEM"){

        let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
            let { quantity } = curElem;

        initialVal = initialVal + quantity
        return initialVal

        }, 0)

        return {
            ...state,
            total_items : updatedItemVal
        }

    }

    if(action.type === "CAR_TOTAL_PRICE"){

        let totalPrice = state.cart.reduce((initialVal, curElem) => {
            let { price, quantity } = curElem;
            initialVal = initialVal + price * quantity
            return initialVal
        }, 0)
        return {
            ...state,
            total_price : totalPrice
        }
        
    }


  return state
}

export default CartReducer