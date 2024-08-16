import {
  addProductCart,
  selectCartProducts,
} from "@/config/store-config/features/products";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const useProductModal = ({ index, item, visible, onClose }: any) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  const handleAddCartButton = () => {
    const productInCart = cartProducts.find((p: any) => p.id === item.id);
    if (productInCart) {
        Alert.alert(`Product already added`);
    } else {
      dispatch(addProductCart({ id: item.id, quantity: 1 }));
      onClose();
    }
  };
  return { index, item, visible, onClose, handleAddCartButton };
};
