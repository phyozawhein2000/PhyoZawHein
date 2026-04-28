'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { useRef, useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with real-time inventory, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind", "PHP", "Laravel", "PgSQL"],
    image: "🛒",
    gradient: "from-indigo-500 to-purple-500",
    github: "https://github.com/phyozawhein2000/ecommerce_api",
    demo: "https://github.com/phyozawhein2000"
  },
  {
    title: "AI Content Generator",
    description: "Generate blog posts, social media content, and images using OpenAI GPT-4 and DALL-E.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    image: "🤖",
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/phyozawhein2000",
    demo: "https://ai-content-generator-demo.vercel.app"
  },
  {
    title: "Fitness Tracker App",
    description: "Track your workouts, monitor progress, and achieve your fitness goals.",
    tech: ["Kotlin", "PHP", "MySQL"],
    image: "✅",
    gradient: "from-green-500 to-teal-500",
    github: "https://github.com/phyozawhein2000/Fitness_Tracker_App",
    demo: "https://fitness-tracker-app-demo.vercel.app"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, user tracking, and reporting.",
    tech: ["Next.js", "Chart.js", "Prisma", "PostgreSQL"],
    image: "📊",
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/phyozawhein2000",
    demo: "https://analytics-dashboard-demo.vercel.app"
  },
  {
    title: "Food Fusion Website",
    description: "A vibrant website for a fusion restaurant, showcasing the menu, chef's story, and online reservations.",
    tech: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
    image: "🍽️",
    gradient: "from-yellow-500 to-red-500",
    github: "https://github.com/phyozawhein2000/FoodFusion",
    demo: "https://foodfusion.infinityfree.me/?i=1"
  },
  {
    title: "Business Portfolio Website",
    description: "A sleek and modern portfolio website for a business, featuring services, team members, and contact information.",
    tech: ["PHP","Laravel", "MySQL"],
    image: "💼",
    gradient: "from-blue-500 to-green-500",
    github: "https://github.com/phyozawhein2000/thaya",
    demo: "https://www.thayaengineering.com/"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
            {activeIndex + 1} / {projects.length} Projects
          </span>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projects-slider !pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-7xl"
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    
                    {/* Project Number Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      #{index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg text-sm hover:shadow-md transition"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </motion.div>

        {/* Quick Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-indigo-600">{projects.length}+</div>
            <div className="text-sm text-gray-500">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-indigo-600">
              {projects.reduce((acc, p) => acc + p.tech.length, 0)}+
            </div>
            <div className="text-sm text-gray-500">Technologies Used</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-indigo-600">On Time</div>
            <div className="text-sm text-gray-500">Delivery Rate</div>
          </div>
        </motion.div> */}
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .projects-slider .swiper-pagination-bullet {
          background: #6366f1;
          opacity: 0.5;
        }
        .projects-slider .swiper-pagination-bullet-active {
          background: #6366f1;
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
        .projects-slider .swiper-slide {
          transition: all 0.3s ease;
        }
        .projects-slider .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.95);
        }
        .projects-slider .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}