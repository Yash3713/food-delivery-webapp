import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const ApppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default ApppStore;
