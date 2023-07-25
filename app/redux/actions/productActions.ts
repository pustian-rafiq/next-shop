import { IProduct } from "@/app/components/product/ProductList";
import axios from "axios";
import {
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_BY_CATEGORY,
} from "../types";

const getProducts = (products: IProduct[]) => ({
  type: FETCH_PRODUCT_LIST,
  payload: products,
});
const getProduct = (product: IProduct) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: product,
});
const getProductsByCategory = (products: IProduct[]) => ({
  type: FETCH_PRODUCT_LIST_BY_CATEGORY,
  payload: products,
});

// Fetch products list
export const getProductList = () => {
  return function (dispatch: any) {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(getProducts(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Fetch products list by category
export const getProductListByCategory = (category: string) => {
  return function (dispatch: any) {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((resp) => {
        console.log("getProductListByCategory", resp.data);
        dispatch(getProductsByCategory(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Fetch products details
export const getProductDetails = (id: number) => {
  return function (dispatch: any) {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        dispatch(getProduct(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Fetch post details

// Delete Post
