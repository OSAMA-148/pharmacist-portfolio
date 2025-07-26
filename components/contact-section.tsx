import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 cursor-pointer hover:border-purple-500 border-purple-500/50 text-purple-400 bg-transparent backdrop-blur-sm">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Interested in pharmaceutical innovation or clinical research collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">sarah.chen@pharma.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">Phone</div>
                      <div className="text-gray-600 dark:text-gray-400">+1 (415) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">Location</div>
                      <div className="text-gray-600 dark:text-gray-400">San Francisco, CA</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-cyan-400/50 dark:border-cyan-500/30 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 bg-transparent shadow-sm"
                    >
                      <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-purple-400/50 dark:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-500/10 bg-transparent shadow-sm"
                    >
                      <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 focus:border-cyan-500 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 focus:border-cyan-500 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 focus:border-cyan-500 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or collaboration idea..."
                    rows={5}
                    className="bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 focus:border-cyan-500 text-gray-900 dark:text-white resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
