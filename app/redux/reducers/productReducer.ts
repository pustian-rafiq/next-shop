import {
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_BY_CATEGORY,
} from "../types";

const initialState = {
  products: [],
  product: {},
  loading: true,
};

const productReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case FETCH_PRODUCT_LIST_BY_CATEGORY:
      return {
        ...state,
        products: payload,
        loading: false,
      };

    default:
      return state;
    //break;
  }
};
export default productReducer;
