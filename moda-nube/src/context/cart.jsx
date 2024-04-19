import { createContext, useReducer } from "react";

// creamos el contexto
export const CartContext = createContext()

// configuracion del localstorage
const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

// actualizamos el localStorage 
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType){
        case 'ADD_PRODUCT': {
            const { id } =actionPayload
            // verificamos si el producto esta en el carrito
            const productInCartIndex = state.findIndex( item => item.id === id)

            if (productInCartIndex >= 0){
                const newState = structuredClone(state)

                newState[productInCartIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }

            // si el producto no se encuentra en el carrito
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }
        // borrar producto del carrito
        case 'REMOVE_PRODUCT': {
            const { id } = actionPayload
            const newState = state.filter(item => item.id != id)
            updateLocalStorage(newState)
            return newState
        }
        // Limpiar el carrito
        case 'CLEAR_CART': {
            const newState = []
            updateLocalStorage(newState)
            return newState
        }
    }

    return state
}

// creamos el provider
export function CartProvider({ children }){
    const [state, dispatch] = useReducer( reducer, initialState )

    const AddProduct = product => dispatch({
        type: 'ADD_PRODUCT',
        payload: product
    })

    const removeProduct = product => dispatch({
        type: 'REMOVE_PRODUCT',
        payload: product
    })

    const clearCart = () => ({
        type: 'CLEAR_CART',
    })

    return (
        <CartContext.Provider
            value={{
                cart: state,
                AddProduct,
                removeProduct,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}