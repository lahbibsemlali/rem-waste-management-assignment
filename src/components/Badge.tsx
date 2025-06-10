import type React from "react"
import styles from "../App.module.css"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return <span className={`${styles.sizeBadge} ${className}`}>{children}</span>
}
