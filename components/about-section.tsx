import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill, Microscope, Brain, Shield } from "lucide-react"

export function AboutSection() {
  const specializations = [
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Clinical Pharmacy",
      description: "Medication therapy management and patient care optimization",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Research & Development",
      description: "Novel drug formulations and pharmaceutical innovation",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Precision Medicine",
      description: "Personalized treatment protocols based on genetic profiles",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Drug Safety",
      description: "Pharmacovigilance and adverse event monitoring",
    },
  ]

  return (
      <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <Badge
                      variant="outline"
                      className="mb-4 border-cyan-500/30 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 dark:border-cyan-500/50 text-cyan-600 dark:text-cyan-400 bg-white/50 dark:bg-black/20 backdrop-blur-sm"
                  >
                      About Me
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      Advancing Healthcare Through
                      <span className="block text-cyan-600 dark:text-cyan-400">
                          Pharmaceutical Excellence
                      </span>
                  </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="space-y-6">
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          With over 8 years of experience in clinical pharmacy
                          and pharmaceutical research, I specialize in
                          developing innovative medication protocols that bridge
                          the gap between cutting-edge science and patient care.
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          My work focuses on precision medicine, utilizing
                          pharmacogenomics and AI-driven analytics to optimize
                          therapeutic outcomes while minimizing adverse effects.
                      </p>
                      <div className="flex flex-wrap gap-2">
                          {[
                              "PharmD",
                              "Board Certified",
                              "Research Fellow",
                              "AI Healthcare",
                          ].map((badge) => (
                              <Badge
                                  key={badge}
                                  variant="secondary"
                                  className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors "
                              >
                                  {badge}
                              </Badge>
                          ))}
                      </div>
                  </div>

                  <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                      <Card className="relative border-cyan-500/20 dark:border-cyan-500/30 bg-white/80 dark:bg-black/40 backdrop-blur-sm shadow-lg">
                          <CardContent className="p-8">
                              <div className="grid grid-cols-2 gap-6 text-center">
                                  <div>
                                      <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                                          500+
                                      </div>
                                      <div className="text-sm text-gray-500 dark:text-gray-400">
                                          Patients Treated
                                      </div>
                                  </div>
                                  <div>
                                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                          15
                                      </div>
                                      <div className="text-sm text-gray-500 dark:text-gray-400">
                                          Research Papers
                                      </div>
                                  </div>
                                  <div>
                                      <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                                          3
                                      </div>
                                      <div className="text-sm text-gray-500 dark:text-gray-400">
                                          Patents Filed
                                      </div>
                                  </div>
                                  <div>
                                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                          98%
                                      </div>
                                      <div className="text-sm text-gray-500 dark:text-gray-400">
                                          Success Rate
                                      </div>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {specializations.map((spec, index) => (
                      <Card
                          key={index}
                          className="border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-300 group shadow-sm"
                      >
                          <CardContent className="p-6 text-center">
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                  {spec.icon}
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                  {spec.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {spec.description}
                              </p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
  );
}
