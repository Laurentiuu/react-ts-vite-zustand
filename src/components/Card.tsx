import React from "react"

export interface CardProps {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="p-5 transition-all duration-200 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}
