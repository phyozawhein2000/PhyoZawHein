'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  { name: 'Next.js', level: 85, color: 'bg-gray-700' },
  { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
  { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
  { name: 'PHP', level: 90, color: 'bg-purple-500' },
  { name: 'Laravel', level: 90, color: 'bg-red-500' },
  { name: 'MySQL', level: 80, color: 'bg-green-600' },
  { name: 'Python', level: 70, color: 'bg-yellow-500' },
  { name: 'Django', level: 65, color: 'bg-green-700' },
  { name: 'Git', level: 80, color: 'bg-gray-800' },

]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              I'm a passionate full-stack developer with 4+ years of experience
              creating digital solutions that make a difference.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              I love turning ideas into reality through code. When I'm not
              coding, you can find me exploring new technologies, contributing
              to open source, or mentoring aspiring developers.
            </p>

            <div className="flex gap-3 flex-wrap text-sm md:text-base mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>20+ Projects</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>10+ Clients</span>
              </div> */}
            </div>

            {/* Download CV Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='/cv/PHYOZAWHEIN.pdf'
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ delay: 0.5 + index * 0.03, duration: 1 }}
                >
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.03, duration: 1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}