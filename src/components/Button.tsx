import React from "react"

export type ButtonVariant = "primary" | "secondary" | "danger"

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = "primary", onClick, className = "" }: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95"

  const variantClass =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : variant === "secondary"
        ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400"
        : "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400"

  return (
    <button onClick={onClick} className={`${base} ${variantClass} ${className}`}>
      {children}
    </button>
  )
}
