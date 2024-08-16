import { createSlice } from "@reduxjs/toolkit";

interface productsStateInterface {
  products: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
  }[];
  cartProducts: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
  }[];
}

const initialState: productsStateInterface = {
  products: [],
  cartProducts: [],
};

const productReducer = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = [...action.payload];
    },
    addProductCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        const product = {
          ...state.products[index],
          quantity: action.payload.quantity,
        };
        state.cartProducts.push(product);
      }
    },
    removeProductCart: (state, action) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cartProducts.splice(index, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cartProducts[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1 && state.cartProducts[index].quantity > 1) {
        state.cartProducts[index].quantity--;
      }
    },
  },
});

export const {
  addProducts,
  addProductCart,
  removeProductCart,
  incrementQuantity,
  decrementQuantity,
} = productReducer.actions;

export const selectProducts = (state: any) => state.products.products;
export const selectCartProducts = (state: any) => state.products.cartProducts;
export const selectTotalPrice = (state: any) => {
  var totalPrice = 0;
  state.products.cartProducts.map(
    (product: any) => (totalPrice += (product.price * product.quantity))
  );
  return totalPrice;
};
export const selectCardProductCount = (state: any) => state.products.cartProducts?.length;

export default productReducer.reducer;
