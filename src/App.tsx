import { Navigate, Route, Routes } from "react-router-dom"
import { Protected } from "./router/Protected"
import { routes } from "./router/routes"
import { Home } from "./pages/Home"
import { useThemeStore } from "./stores/useThemeStore"

export const App = () => {
  const { main } = routes
  const { theme } = useThemeStore()

  // Tailwind gradient classes
  const bgClass =
    theme === "light"
      ? "bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300"
      : "bg-gradient-to-r from-gray-800 via-gray-900 to-black"

  return (
    <div className={`w-screen h-screen overflow-hidden ${bgClass} transition-colors duration-500`}>
      <Routes>
        <Route
          path={main}
          element={
            <Protected>
              <Route path={main} element={<Home />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Protected>
          }
        />
      </Routes>
    </div>
  )
}
