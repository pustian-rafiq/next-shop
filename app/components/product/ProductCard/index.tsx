import { useAppDispatch } from "@/app/hooks/hooks";
import { productAddToCart } from "@/app/redux/actions/cartActions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./product-card.module.css";

interface IProduct {
  product: {
    id?: number;
    title?: string;
    category?: any;
    price?: number;
    description?: string;
    image?: string | any;
    quantity?: number;
  };
}
type Product = {
  id?: number;
  title?: string;
  category?: string;
  price?: number;
  description?: string;
  image?: string | any;
  quantity?: number;
};

const ProductCard: FC<IProduct> = ({ product }) => {
  const dispatch = useAppDispatch();

  // Add to caty product
  const addToCart = (product: Product) => {
    dispatch(productAddToCart(product));
  };
  return (
    <div key={product?.id} className={styles.card}>
      <Image
        src={product?.image}
        alt="img"
        width={170}
        height={230}
        className={styles.productImage}
      />

      <div className={styles.cardContainer}>
        <Link
          href={`/product-details/${product.id}`}
          className={`link-btn ${styles.productTitle}`}
        >
          {product.title?.slice(0, 50)}
        </Link>
        <div className={styles.price}>
          <h5>{product.price}</h5>
          <button className="cartBtn" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
