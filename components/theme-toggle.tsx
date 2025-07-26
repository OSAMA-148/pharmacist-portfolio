"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden border-cyan-500/30 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-cyan-600 dark:text-cyan-400" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-600 dark:text-cyan-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
