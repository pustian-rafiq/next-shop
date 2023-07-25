"use client";
import { useState } from "react";
import Category from "./components/Category";
import ProductList from "./components/product/ProductList";
import styles from "./page.module.css";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className={styles.homeContainer}>
      <Category handleChange={handleChange} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}
