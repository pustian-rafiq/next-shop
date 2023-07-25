import { useAppSelector } from "@/app/hooks/hooks";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { cart_list } = useAppSelector((state: any) => state.cart_list);
  console.log("cart_list", cart_list);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h4>Next Shop</h4>
      </div>

      <Link href={"/cart"} className={styles.cart}>
        <FaCartPlus className={styles.icon} />
        <span className={styles.cartCount}>{cart_list?.length}</span>
        {/* <div className="detail">
            Cart
            <div className="sub">Rs 0.0</div>
          </div> */}
      </Link>
    </nav>
  );
};

export default Navbar;
