import type React from "react"
import styles from "../App.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  size?: "small" | "default" | "large"
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...props
}) => {
  const baseClass = styles.button
  const variantClass = variant === "primary" ? styles.buttonPrimary : styles.buttonOutline
  const sizeClass = size === "large" ? styles.buttonLarge : size === "small" ? styles.buttonSmall : ""

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
