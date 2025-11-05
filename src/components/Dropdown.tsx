import { useState, useRef, useEffect } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

export interface DropdownItem {
  label: string
  onClick: () => void
}

export interface DropdownProps {
  label: string
  items: DropdownItem[]
}

export function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={item.onClick}
              className="block w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
