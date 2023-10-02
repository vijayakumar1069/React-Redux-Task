import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/ProductSlices";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default Store;
