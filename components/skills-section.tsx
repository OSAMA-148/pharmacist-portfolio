import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Clinical Pharmacology", level: 95 },
    { name: "Pharmacokinetics", level: 90 },
    { name: "Drug Development", level: 85 },
    { name: "Pharmacogenomics", level: 88 },
    { name: "Clinical Research", level: 92 },
    { name: "Regulatory Affairs", level: 80 },
  ]

  const technologies = [
    "Epic Systems",
    "Cerner",
    "MATLAB",
    "R Programming",
    "Python",
    "SAS",
    "Clinical Trial Management",
    "FDA Regulations",
    "GCP",
    "Pharmacovigilance",
    "AI/ML in Healthcare",
    "Bioinformatics",
  ]

  const certifications = [
    "Doctor of Pharmacy (PharmD)",
    "Board Certified Pharmacotherapy Specialist (BCPS)",
    "Clinical Research Coordinator (CRC)",
    "Pharmacogenomics Certificate",
    "AI in Healthcare Specialization",
  ]

  return (
      <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <Badge
                      variant="outline"
                      className="mb-4 border-cyan-500/50 text-cyan-400 hover:border-cyan-600 hover:text-cyan-300 bg-transparent backdrop-blur-sm"
                  >
                      Skills & Expertise
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
                      Technical Proficiency
                  </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                  {/* Core Skills */}
                  <Card className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-lg">
                      <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">
                              Core Competencies
                          </h3>
                          <div className="space-y-6">
                              {technicalSkills.map((skill, index) => (
                                  <div key={index}>
                                      <div className="flex justify-between items-center mb-2">
                                          <span className="text-gray-900 dark:text-white font-medium">
                                              {skill.name}
                                          </span>
                                          <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                                              {skill.level}%
                                          </span>
                                      </div>
                                      <Progress
                                          value={skill.level}
                                          className="h-2 bg-gray-200 dark:bg-gray-800"
                                      />
                                  </div>
                              ))}
                          </div>
                      </CardContent>
                  </Card>

                  {/* Technologies & Certifications */}
                  <div className="space-y-8">
                      <Card className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-lg">
                          <CardContent className="p-8">
                              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                                  Technologies & Tools
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                  {technologies.map((tech, index) => (
                                      <Badge
                                          key={index}
                                          variant="secondary"
                                          className="bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30 hover:bg-cyan-200 dark:hover:bg-cyan-500/30 transition-colors duration-200"
                                      >
                                          {tech}
                                      </Badge>
                                  ))}
                              </div>
                          </CardContent>
                      </Card>

                      <Card className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-lg">
                          <CardContent className="p-8">
                              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                                  Certifications
                              </h3>
                              <div className="space-y-3">
                                  {certifications.map((cert, index) => (
                                      <div
                                          key={index}
                                          className="flex items-center gap-3"
                                      >
                                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 rounded-full" />
                                          <span className="text-gray-700 dark:text-gray-300">
                                              {cert}
                                          </span>
                                      </div>
                                  ))}
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </div>
      </section>
  );
}
