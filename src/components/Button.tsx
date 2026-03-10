import React, { type ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  download,
  className = "",
  children,
  ...props
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
