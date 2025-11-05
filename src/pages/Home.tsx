import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import { Dropdown } from "@/components/Dropdown"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid" // Heroicons import
import { useThemeStore } from "@/stores/useThemeStore"

export const Home = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="flex w-full h-full flex-col items-center justify-center min-h-screen gap-6 p-6 bg-gradient-to-t bg-gray-50 transition-colors duration-500">
      {/* Theme Toggle Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 ${theme === "light" ? "bg-yellow-300 text-black" : ""}`}
        >
          <SunIcon className="h-5 w-5" />
          Light
        </Button>

        <Button onClick={() => setTheme("dark")} className={`flex items-center gap-2 ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}>
          <MoonIcon className="h-5 w-5" />
          Dark
        </Button>
      </div>

      {/* Existing UI Kit Card */}
      <Card title="UI Kit">
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button  variant="danger">Danger</Button>
          <Dropdown
            label="Actions"
            items={[
              { label: "Edit", onClick: () => alert("Edit clicked") },
              { label: "Delete", onClick: () => alert("Delete clicked") },
            ]}
          />
        </div>
      </Card>
    </div>
  )
}
