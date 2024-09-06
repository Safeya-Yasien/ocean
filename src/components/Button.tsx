import { ReactNode } from "react";

interface IButtonProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  children,
}: IButtonProps) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
