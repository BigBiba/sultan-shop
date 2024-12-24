import { useSelector } from "react-redux"
import RenderCartItems from "./BasketRender"

export default function Cart() {
    const {total, totalItems} = useSelector((state) => state.cart) 
    return (
        <div >
            <h1>Your Cart</h1>
            <p >{totalItems} Items in cart</p>
            {
                total>0 
                ? (
                    <div >
                        <RenderCartItems /> 
                    </div>
                )
                : (
                    <p>Your Cart is empty</p>
                )
            }
        </div>
    )
}