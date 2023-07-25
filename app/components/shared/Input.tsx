import { FC } from "react";

interface IInput {
  handleChange: any;
  value: string;
  title: string;
  name: string;
}

const Input: FC<IInput> = ({ handleChange, value, title, name }) => {
  return (
    <label className="flex content-start item-center">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="ml-10"></span>
      {title}
    </label>
  );
};

export default Input;
