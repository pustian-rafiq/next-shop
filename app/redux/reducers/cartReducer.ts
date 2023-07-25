import { IProduct } from "@/app/components/product/ProductList";
import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  FETCH_CART_PRODUCT_LIST,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "../types";

const initialState = {
  cart_list: [] as IProduct[],
  subTotal: 0,
  loading: true,
};

const cartReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const isExistProduct = state.cart_list.find(
        (product) => product.id === payload.id
      );
      if (isExistProduct?.id) {
        toast.warning("This product already exists");
      } else {
        state.subTotal = state.subTotal + payload.price;
        state.cart_list.push({
          ...payload,
          quantity: 1,
        });
        toast.success("Product is added to cart successfully");
      }
      return {
        ...state,
        loading: false,
      };
    case FETCH_CART_PRODUCT_LIST:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_FROM_CART:
      const removedProduct = state.cart_list.find(
        (product) => product.id === payload
      );
      state.cart_list = state.cart_list.filter(
        (product) => product.id !== payload
      );
      state.subTotal = removedProduct
        ? state.subTotal - removedProduct?.price
        : state.subTotal;
      return {
        ...state,
        loading: false,
      };

    case INCREMENT_QUANTITY:
      let findIndex = state.cart_list.findIndex(
        (product) => product.id === payload
      );
      const findProduct = state.cart_list?.find(
        (product) => product.id === payload
      );
      if (findIndex === 0) {
        var qty = findProduct?.quantity || 1;
        state.subTotal = state.subTotal + findProduct?.price;
        state.cart_list = [
          {
            ...findProduct,
            quantity: qty + 1,
          },
          ...state.cart_list.slice(findIndex + 1),
        ];
      } else {
        var qty = findProduct?.quantity || 1;
        state.subTotal = state.subTotal + findProduct?.price;
        state.cart_list = [
          ...state.cart_list.slice(0, findIndex),
          {
            ...findProduct,
            quantity: qty + 1,
          },
          ...state.cart_list.slice(findIndex + 1),
        ];
      }

      return {
        ...state,
        loading: false,
      };
    case DECREMENT_QUANTITY:
      const findDecrementIndex = state.cart_list.findIndex(
        (product) => product.id === payload
      );
      const findDecrementProduct = state.cart_list?.find(
        (product) => product.id === payload
      );
      if (findDecrementIndex === 0) {
        var qty = findDecrementProduct?.quantity || 1;
        state.subTotal = state.subTotal - findDecrementProduct?.price;
        state.cart_list = [
          {
            ...findDecrementProduct,
            quantity: qty - 1,
          },
          ...state.cart_list.slice(findDecrementIndex + 1),
        ];
      } else {
        var qty = findDecrementProduct?.quantity || 1;
        state.subTotal = state.subTotal - findDecrementProduct?.price;
        state.cart_list = [
          ...state.cart_list.slice(0, findDecrementIndex),
          {
            ...findDecrementProduct,
            quantity: qty - 1,
          },
          ...state.cart_list.slice(findDecrementIndex + 1),
        ];
      }

      return {
        ...state,
        loading: false,
      };

    default:
      return state;
    //break;
  }
};
export default cartReducer;
