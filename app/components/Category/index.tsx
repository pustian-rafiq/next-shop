import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { getCategoryList } from "@/app/redux/actions/categoryActions";
import { FC, useEffect } from "react";
import Input from "../shared/Input";
import styles from "./category.module.css";

interface ICategory {
  handleChange: any;
}
const Category: FC<ICategory> = ({ handleChange }) => {
  const { categories, loading } = useAppSelector(
    (state: any) => state.categories
  );
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  if (loading) {
    return;
  }

  return (
    <div>
      <h4 style={{ fontSize: "17px" }}>Filter By Category</h4>
      <div className={styles.categoryWrapper}>
        <label className="flex">
          <input onChange={handleChange} type="radio" value="" name="filter" />
          <span className="ml-10"></span>All
        </label>
        {categories?.map((category: string, i: number) => (
          <Input
            handleChange={handleChange}
            value={category}
            title={category}
            name="filter"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
