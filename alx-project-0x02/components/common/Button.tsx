import { type ButtonProps } from "@/interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  const sizeClass = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-2 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass[size]} ${shape} hover:bg-blue-700 transition-colors`}
    >
      {label}
    </button>
  );
}
