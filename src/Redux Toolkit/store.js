import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import dataSlice from "./features/categories/categorySlice";
import productSlice from "./features/products/productSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        category: dataSlice,
        product: productSlice
    },
})