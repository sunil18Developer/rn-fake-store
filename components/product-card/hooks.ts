import { decrementQuantity, incrementQuantity, removeProductCart } from "@/config/store-config/features/products";
import { useDispatch } from "react-redux"

export const useProductCard = (item: any) => {
    const dispatch = useDispatch();
    const handleIncrementCartButton = () => {
        dispatch(incrementQuantity(item.id))
    }
    const handleDecrementCartButton = () => {
        dispatch(decrementQuantity(item.id))
    }
    const handleRemoveCartProduct = () => {
        dispatch(removeProductCart(item.id))
    }
    return { handleIncrementCartButton, handleDecrementCartButton, handleRemoveCartProduct };
}