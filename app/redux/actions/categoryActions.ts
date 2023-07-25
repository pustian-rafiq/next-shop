import axios from "axios";
import { FETCH_CATEGORY_LIST } from "../types";

const getCategories = (categories: string[]) => ({
  type: FETCH_CATEGORY_LIST,
  payload: categories,
});

// Fetch category list
export const getCategoryList = () => {
  return function (dispatch: any) {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resp) => {
        dispatch(getCategories(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
