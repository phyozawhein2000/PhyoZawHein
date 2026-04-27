'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", link: "https://github.com/phyozawhein2000", icon: FaGithub, color: "hover:text-gray-400" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/phyozaw-hein-768164385/?skipRedirect=true", icon: FaLinkedin, color: "hover:text-blue-400" },
    { name: "Twitter", link: "https://twitter.com/phyozawhein2000", icon: FaTwitter, color: "hover:text-blue-400" },
    { name: "Instagram", link: "https://instagram.com/@pz_2000", icon: FaInstagram, color: "hover:text-pink-400" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PHYO.
            </h3>
            <p className="text-gray-400 mt-2">Creating digital experiences that matter</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ y: -5, scale: 1.2 }}
                className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                target="_blank"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"
        />

        <div className="text-center text-gray-400">
          <p>&copy; 2026 PHYO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}