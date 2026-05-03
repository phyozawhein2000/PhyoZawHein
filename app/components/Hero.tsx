'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Contact']

  // Mobile View Component
  if (isMobile) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-sm mx-auto text-center">
          {/* Profile Image - Fixed */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-6 flex justify-center"
          >
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                {!imageError ? (
                  <img
                    src="/images/phyozawhein.jpg"
                    alt="Phyo Zaw Hein"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-2 text-white"
          >
            Phyo Zaw Hein
          </motion.h2>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-300 text-center mb-6 text-sm"
          >
            Full Stack Developer
          </motion.p>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-300 text-sm mb-8 px-4"
          >
            Building beautiful digital experiences with modern technologies
          </motion.p>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`py-2.5 px-4 text-center rounded-xl font-medium transition-all duration-300 text-sm ${
                  item === 'Home'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  // Desktop View
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600/10 via-purple-600/20 to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        {/* Profile Image - Desktop Fixed */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
              {!imageError ? (
                <img
                  src="/images/phyozawhein.jpg"
                  alt="Phyo Zaw Hein"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Phyo Zaw Hein
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mb-4"
        >
          Creative Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          I build beautiful, responsive, and high-performance web applications
          with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition"
          >
            Get In Touch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition"
          >
            View Projects
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}