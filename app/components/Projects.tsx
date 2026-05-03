'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { useRef, useState } from 'react'
import type { Swiper as SwiperCore } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with real-time inventory, payment integration, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind", "Laravel"],
    image: "🛒",
    gradient: "from-indigo-600 to-blue-500",
    github: "https://github.com/phyozawhein2000/ecommerce_api",
    demo: "https://github.com/phyozawhein2000"
  },
  {
    title: "AI Content Generator",
    description: "Generate blog posts, social media content, and images using OpenAI GPT-4 and DALL-E.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    image: "🤖",
    gradient: "from-purple-600 to-pink-500",
    github: "https://github.com/phyozawhein2000",
    demo: "https://ai-content-generator-demo.vercel.app"
  },
  {
    title: "Fitness Tracker App",
    description: "Track your workouts, monitor progress, and achieve your fitness goals with data visualization.",
    tech: ["Kotlin", "PHP", "MySQL"],
    image: "✅",
    gradient: "from-emerald-500 to-teal-500",
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
    description: "A vibrant website for a fusion restaurant, showcasing the menu and online reservations.",
    tech: ["HTML", "Tailwind", "PHP", "MySQL"],
    image: "🍽️",
    gradient: "from-yellow-500 to-orange-600",
    github: "https://github.com/phyozawhein2000/FoodFusion",
    demo: "https://foodfusion.infinityfree.me/?i=1"
  },
  {
    title: "Business Portfolio",
    description: "Modern portfolio for an engineering firm featuring services and contact systems.",
    tech: ["PHP", "Laravel", "MySQL"],
    image: "💼",
    gradient: "from-cyan-500 to-blue-600",
    github: "https://github.com/phyozawhein2000/thaya",
    demo: "https://www.thayaengineering.com/"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperCore | null>(null)

  return (
    <section id="projects" className="py-24 px-6 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            My Recent <span className="text-indigo-600">Work</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my passion for clean code and user-centric design.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative group px-4 md:px-12">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            grabCursor={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="!pb-20 !pt-10"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <div className={`
                  bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden 
                  transition-all duration-500 h-full flex flex-col
                  ${activeIndex === index ? 'scale-100 opacity-100 shadow-2xl' : 'scale-90 opacity-40 blur-[1px]'}
                `}>
                  {/* Card Header */}
                  <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                    <span className="text-8xl drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      PROJ-0{index + 1}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-gray-100">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors">
                        <FaGithub /> GitHub
                      </a>
                      <a href={project.demo} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                        <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <FaArrowRight />
          </button>

          {/* Pagination Container */}
          <div className="custom-pagination !bottom-4 flex justify-center gap-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          background: #4f46e5;
        }
      `}</style>
    </section>
  )
}