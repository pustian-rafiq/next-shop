"use client";
import RelatedProducts from "@/app/components/product/RelatedProducts";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { productAddToCart } from "@/app/redux/actions/cartActions";
import {
  getProductDetails,
  getProductListByCategory,
} from "@/app/redux/actions/productActions";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useEffect } from "react";
import styles from "./product-details.module.css";

type Props = {
  productId: number;
};
type Product = {
  id: number;
  title: string;
  category: any;
  price: number;
  description: string;
  image: string;
};

const ProductDetailsPage: FC<Props> = () => {
  const params = useParams();
  const id: number = Number(params.id);

  // const [productDetails, setProductDetails] = useState<null>(null);
  const { product, loading } = useAppSelector((state: any) => state.products);
  const { products, loading: relatedProductLoading } = useAppSelector(
    (state: any) => state.products
  );
  const dispatch: any = useAppDispatch();
  const addToCart = (product: Product) => {
    dispatch(productAddToCart(product));
  };

  // Fetch product details
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  // Fetch related products
  useEffect(() => {
    dispatch(getProductListByCategory(product?.category));
  }, [product?.category]);

  if (loading || relatedProductLoading) {
    return <h4>Loading product....</h4>;
  }
  return (
    <div>
      <div className={styles.productDetailsWrapper}>
        <div className={styles.productImage}>
          <Image src={product?.image} height={300} width={250} alt="" />
        </div>
        <div className={styles.productContent}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <hr />

          <p className={styles.category}>
            {" "}
            <span>Category</span> : {product.category}
          </p>
          <p className={styles.price}>
            <span>Price</span> : {product.price} Tk
          </p>

          <button className="cartBtn" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h3>Related Products</h3>
        <RelatedProducts products={products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
