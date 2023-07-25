import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart_list: cartReducer,
});

export default rootReducer;
