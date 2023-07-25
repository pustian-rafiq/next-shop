import { FETCH_CATEGORY_LIST } from "../types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
        loading: false,
      };

    default:
      return state;
    //break;
  }
};
export default categoryReducer;
