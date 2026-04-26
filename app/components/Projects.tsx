'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with real-time inventory, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "🛒",
    gradient: "from-indigo-500 to-purple-500",
    github: "#",
    demo: "#"
  },
  {
    title: "AI Content Generator",
    description: "Generate blog posts, social media content, and images using OpenAI GPT-4 and DALL-E.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    image: "🤖",
    gradient: "from-purple-500 to-pink-500",
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, file sharing, and team chat.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "✅",
    gradient: "from-green-500 to-teal-500",
    github: "#",
    demo: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, user tracking, and reporting.",
    tech: ["Next.js", "Chart.js", "Prisma", "PostgreSQL"],
    image: "📊",
    gradient: "from-orange-500 to-red-500",
    github: "#",
    demo: "#"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My Recent <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some projects I've worked on. Each one was crafted with care and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-7xl"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg text-sm hover:shadow-md transition"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}