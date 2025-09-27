import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base"; // default medium

  const shapeClasses =
    shape === "rounded-sm"
      ? "rounded-sm"
      : shape === "rounded-full"
      ? "rounded-full"
      : "rounded-md"; // default

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses} ${shapeClasses}`}
    >
      {title}
    </button>
  );
};

export default Button;
