import { selectCartProducts } from "@/config/store-config/features/products"
import { useSelector } from "react-redux"

export const useCartProductList = () => {
    const cartProducts = useSelector(selectCartProducts)
    return {
        cartProducts
    }
}