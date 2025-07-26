import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Clinical Pharmacist",
      company: "UCSF Medical Center",
      location: "San Francisco, CA",
      period: "2020 - Present",
      description:
        "Lead precision medicine initiatives and oversee medication therapy management for complex patient cases. Developed AI-assisted drug interaction protocols.",
      achievements: [
        "Reduced medication errors by 35%",
        "Implemented pharmacogenomic testing program",
        "Published 8 peer-reviewed papers",
      ],
    },
    {
      title: "Clinical Research Pharmacist",
      company: "Genentech",
      location: "South San Francisco, CA",
      period: "2018 - 2020",
      description:
        "Conducted Phase II/III clinical trials for oncology medications. Collaborated with multidisciplinary teams on drug development protocols.",
      achievements: ["Managed 12 clinical trials", "Contributed to 3 FDA approvals", "Mentored 6 pharmacy residents"],
    },
    {
      title: "Staff Pharmacist",
      company: "Stanford Health Care",
      location: "Palo Alto, CA",
      period: "2016 - 2018",
      description:
        "Provided comprehensive pharmaceutical care in ICU and emergency departments. Specialized in critical care pharmacotherapy.",
      achievements: ["Optimized ICU medication protocols", "Reduced drug costs by 20%", "Earned Board Certification"],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 hover:border-purple-500 border-purple-500/50 text-purple-400 backdrop-blur-sm dark:bg-transparent bg-transparent">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm hover:border-cyan-400/50 dark:hover:border-cyan-500/30 hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300 shadow-sm"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">{exp.title}</CardTitle>
                    <div className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">{exp.company}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
