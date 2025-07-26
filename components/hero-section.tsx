import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 dark:from-cyan-500/10 dark:via-transparent dark:to-purple-500/10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/10 dark:border-cyan-500/20 rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/10 dark:border-purple-500/20 rotate-12 animate-bounce" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Badge
          variant="outline"
          className="mb-6 border-cyan-500/30 dark:border-cyan-500/50 text-cyan-600 dark:text-cyan-400 bg-white/50 dark:bg-black/20 backdrop-blur-sm"
        >
          PharmD • Clinical Specialist
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-gray-900 to-purple-600 dark:from-cyan-400 dark:via-white dark:to-purple-400 bg-clip-text text-transparent">
          Dr. Sarah Chen
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Clinical Pharmacist specializing in{" "}
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">precision medicine</span> and{" "}
          <span className="text-purple-600 dark:text-purple-400 font-semibold">pharmaceutical innovation</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full" />
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Mail className="w-4 h-4" />
            <span>sarah.chen@pharma.com</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
