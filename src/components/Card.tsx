"use client"

import type React from "react"
import styles from "../App.module.css"

interface CardProps {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, selected = false, onClick, className = "" }) => {
  return (
    <div className={`${styles.skipCard} ${selected ? styles.selected : ""} ${className}`} onClick={onClick}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}
