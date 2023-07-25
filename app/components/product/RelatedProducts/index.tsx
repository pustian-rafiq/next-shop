import { FC } from "react";
import ProductCard from "../ProductCard";

import styles from "./related-product.module.css";
interface IProduct {
  id: number;
  title: string;
  category: any;
  price: number;
  description: string;
  image: string;
}
type ProductArray = IProduct[];

const RelatedProducts: FC<{ products: ProductArray }> = ({ products }) => {
  return (
    <div className={styles.productsWrapper}>
      {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default RelatedProducts;
