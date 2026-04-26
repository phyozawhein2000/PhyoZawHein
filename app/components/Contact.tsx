'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaCopy, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const email = "phyozawhein2000@gmail.com"
  const phone = "+959 973 876 832"

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Hello from Portfolio&body=I'm interested in working with you!`
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactMethods = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Me",
      value: email,
      action: handleEmailClick,
      buttonText: "Send Message",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Call Me",
      value: phone,
      action: () => window.location.href = `tel:${phone}`,
      buttonText: "Make a Call",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      value: phone,
      action: () => window.open(`https://wa.me/${phone.replace(/\s/g, '')}`, "_blank"),
      buttonText: "Start Chat",
      gradient: "from-green-600 to-emerald-600"
    }
  ]

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, name: "GitHub", link: "#", color: "hover:bg-gray-800" },
    { icon: <FaLinkedin className="w-5 h-5" />, name: "LinkedIn", link: "#", color: "hover:bg-blue-600" },
    { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter", link: "#", color: "hover:bg-blue-400" },
    { icon: <FaInstagram className="w-5 h-5" />, name: "Instagram", link: "#", color: "hover:bg-pink-600" },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let's Work <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out to me through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 text-center group cursor-pointer hover:shadow-xl transition-all"
              onClick={method.action}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white`}
              >
                {method.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-500 mb-4 text-sm break-all">
                {method.value}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 bg-gradient-to-r ${method.gradient} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition`}
              >
                {method.buttonText} →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Copy Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-full px-6 py-3 shadow-md">
            <FaEnvelope className="text-indigo-500 w-5 h-5" />
            <span className="text-gray-800 font-medium">{email}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full text-sm hover:shadow-lg transition"
            >
              <FaCopy className="w-3 h-3" />
              {copied ? "Copied!" : "Copy Email"}
            </motion.button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Or connect with me on social media</p>
          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 ${social.color}`}
                target="_blank"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}