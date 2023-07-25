import { IProduct } from "@/app/components/product/ProductList";
import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  FETCH_CART_PRODUCT_LIST,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "../types";

const addToCart = (products: IProduct) => ({
  type: ADD_TO_CART,
  payload: products,
});
const getCartProductList = () => ({
  type: FETCH_CART_PRODUCT_LIST,
  payload: "",
});
const removeCartItem = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
const incrementQty = (id: number) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});
const decrementQty = (id: number) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

// Product Add to Cart
export const productAddToCart = (product: IProduct) => {
  return function (dispatch: any) {
    dispatch(addToCart(product));
  };
};
// Fetch cart products list
export const getCartProducts = () => {
  return function (dispatch: any) {
    dispatch(getCartProductList());
  };
};

// Remove products from cart list
export const removeFromCartList = (id: number) => {
  return function (dispatch: any) {
    toast.success("Product is successfully removed from cart");
    dispatch(removeCartItem(id));
  };
};

// Increment quantity
export const incrementQuantity = (id: number) => {
  return function (dispatch: any) {
    dispatch(incrementQty(id));
  };
};
// Decrement quantity
export const decrementQuantity = (id: number) => {
  return function (dispatch: any) {
    dispatch(decrementQty(id));
  };
};
