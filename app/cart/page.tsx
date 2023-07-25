"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IProduct } from "../components/product/ProductList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  decrementQuantity,
  getCartProducts,
  incrementQuantity,
  removeFromCartList,
} from "../redux/actions/cartActions";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart_list, loading } = useAppSelector((state: any) => state);
  console.log(cart_list);
  const dispatch = useAppDispatch();

  // Remove cart item
  const removeFromCart = (id: number) => {
    console.log(id);
    if (id) {
      dispatch(removeFromCartList(id));
    }
  };

  // Increment or decrement quantity
  const incrementDecrementQuantity = (id: number, type: string) => {
    console.log(id);
    if (type === "increment") {
      dispatch(incrementQuantity(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };
  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  if (loading) {
    return <h4>Loading posts....</h4>;
  }

  return (
    <div className={styles.cartWrapper}>
      <h3>Your Cart</h3>
      <table className={styles.cart}>
        <thead>
          <tr>
            <th style={{ width: "150px" }}>Title</th>
            <th style={{ width: "300px" }}>Description</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart_list?.cart_list?.length > 0
            ? cart_list?.cart_list?.map((product: IProduct, i: number) => (
                <tr key={i}>
                  <td>{product?.title}</td>
                  <td>{product?.description}</td>
                  <td>
                    <Image src={product.image} height={100} width={70} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        incrementDecrementQuantity(product?.id, "increment")
                      }
                    >
                      +
                    </button>
                    <input
                      style={{ width: "50px", textAlign: "center" }}
                      value={product?.quantity}
                    />
                    <button
                      onClick={() =>
                        incrementDecrementQuantity(product?.id, "decrement")
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>{product?.price}</td>
                  <td>{product?.price * product.quantity}</td>

                  <td>
                    {/* <FaBacon /> */}
                    <button onClick={() => removeFromCart(product?.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : ""}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Sub Total: {cart_list?.subTotal?.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {cart_list?.cart_list?.length < 1 && (
        <p>
          {" "}
          No products in your cart! Please add to cart{" "}
          <Link href={"/"}>Here</Link>
        </p>
      )}
    </div>
  );
};

export default CartPage;
