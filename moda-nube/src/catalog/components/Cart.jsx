import { useId } from "react";
import { useCart } from "../../hooks/useCart";
import { ClearCartIcon, CartIcon } from "./Icons";

function CartItem({ image, title, price, quantity, AddProduct}){
    return (
        <li>
            <img 
                src={ image } 
                alt={ title } 
            />
            <div>
                <strong>{ title }</strong> - ${ price }
            </div>

            <footer>
                <small> cant: { quantity } </small>
                <button onClick={ AddProduct }>+</button>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartCheckboxId = useId()

    // llamamos las funcionalidades de useCart
    const { cart, clearCart, AddProduct, removeProduct } = useCart()

    const cantProductos = cart.reduce((total, product) => total + product.quantity, 0)

    const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    return (
        <>
            <label htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
        </>
    )
}