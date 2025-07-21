import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ shape, size }) => {
  return (
    <button className={` px-3 py-2 bg-amber-300${shape} ${size}`}>
      Button
    </button>
  );
};

export default Button;
