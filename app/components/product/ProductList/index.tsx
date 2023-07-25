import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  getProductList,
  getProductListByCategory,
} from "@/app/redux/actions/productActions";
import { FC, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./product-list.module.css";
import styles from "./product-list.module.css";

export interface IProduct {
  id?: number | any;
  title?: string | any;
  category?: any | any;
  price?: number | any;
  description?: string | any;
  image?: string | any;
  quantity?: number | any;
}
interface IProductCategory {
  selectedCategory: string;
}

const ProductList: FC<IProductCategory> = ({ selectedCategory }) => {
  // const [products ,setproducts]=useState([])
  //Fetch all post
  const { products, loading } = useAppSelector((state: any) => state.products);
  const dispatch: any = useAppDispatch();

  console.log("products", products);
  useEffect(() => {
    if (selectedCategory) {
      dispatch(getProductListByCategory(selectedCategory));
    } else {
      dispatch(getProductList());
    }
  }, [selectedCategory]);

  if (loading) {
    return <h4>Loading posts....</h4>;
  }

  return (
    <div className={styles.productsWrapper}>
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default ProductList;
