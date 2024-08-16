import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products"

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
})
