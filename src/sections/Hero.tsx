import { motion } from 'framer-motion'
import { Download, Lightbulb, Rocket, Sprout, Target } from 'lucide-react'

const passionHighlights = [
  { label: 'Building Products', icon: Rocket, className: 'bg-cherry/10 text-cherry' },
  { label: 'Solving Real Problems', icon: Lightbulb, className: 'bg-deepbrown/8 text-deepbrown' },
  { label: 'Learning Every Day', icon: Target, className: 'bg-cherry/10 text-cherry' },
  {
    label: 'Exploring Entrepreneurship',
    icon: Sprout,
    className: 'bg-deepbrown/8 text-deepbrown',
  },
]

const identityTags = [
  'B.Tech Undergraduate',
  'Python Developer',
  'Product Builder',
  'Tech Enthusiast',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 sm:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,rgba(178,34,34,0.12),transparent_50%),radial-gradient(ellipse_at_70%_70%,rgba(62,39,35,0.05),transparent_40%)]" />

      <svg
        className="absolute top-20 left-0 w-64 h-64 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="3" fill="#B22222" />
        <circle cx="160" cy="30" r="2" fill="#B22222" />
        <circle cx="20" cy="150" r="2.5" fill="#B22222" />
        <circle cx="180" cy="120" r="1.5" fill="#B22222" />
        <circle cx="100" cy="10" r="2" fill="#B22222" />
        <path d="M30 60 Q60 40 90 60 T150 50" stroke="#B22222" strokeWidth="0.5" opacity="0.3" />
        <path d="M40 170 Q80 150 120 170 T180 160" stroke="#B22222" strokeWidth="0.5" opacity="0.25" />
        <path d="M10 100 Q50 80 100 100 T190 90" stroke="#B22222" strokeWidth="0.5" opacity="0.2" />
      </svg>

      <svg
        className="absolute bottom-32 right-0 w-48 h-48 opacity-[0.03] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="30" cy="30" r="2" fill="#3E2723" />
        <circle cx="170" cy="50" r="3" fill="#3E2723" />
        <circle cx="50" cy="170" r="2" fill="#3E2723" />
        <circle cx="150" cy="160" r="1.5" fill="#3E2723" />
        <path d="M20 80 Q60 50 100 80 T180 70" stroke="#3E2723" strokeWidth="0.5" opacity="0.3" />
        <path d="M30 140 Q80 120 130 140 T180 130" stroke="#3E2723" strokeWidth="0.5" opacity="0.2" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-beige/50 bg-cream/80 px-5 py-2 text-sm font-bold text-deepbrown/70 shadow-sm backdrop-blur-xl"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-cherry/8 text-xs">
            📍
          </span>
          Tamil Nadu, India
        </motion.span>

        <div className="mt-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-black uppercase tracking-[0.32em] text-deepbrown/55 sm:text-base"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 font-heading text-6xl font-black leading-none text-deepbrown sm:text-7xl lg:text-8xl"
          >
            DHARIKHA
            <span className="inline-block ml-4 text-cherry">👋</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-7 max-w-3xl text-2xl font-semibold leading-9 text-deepbrown/80 sm:text-3xl sm:leading-10"
        >
          Turning ideas into products and problems into opportunities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-deepbrown/65 sm:text-xl sm:leading-9"
        >
          A passionate B.Tech undergraduate at Karunya Institute of Technology
          and Sciences who enjoys building technology-driven solutions,
          exploring entrepreneurship, and transforming innovative ideas into
          impactful products.
        </motion.p>

        <div className="mt-10 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {passionHighlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.06,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="rounded-2xl border border-beige/50 bg-cream/75 p-4 shadow-[0_18px_45px_rgba(62,39,35,0.05)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_24px_60px_rgba(178,34,34,0.08)]"
              >
                <div
                  className={`mx-auto grid h-11 w-11 place-items-center rounded-xl ${item.className}`}
                >
                  <Icon size={21} />
                </div>
                <p className="mt-3 text-sm font-bold text-deepbrown/75">
                  {item.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          {identityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-beige/50 bg-cream/75 px-4 py-2 text-sm font-bold text-deepbrown/65 shadow-sm backdrop-blur-xl"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="/resume/Dharikha_U_Resume.pdf"
          download
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cherry to-deepbrown px-8 py-4 text-sm font-bold text-cream shadow-[0_18px_45px_rgba(178,34,34,0.25)] transition-all duration-300 hover:shadow-[0_24px_55px_rgba(178,34,34,0.35)] focus:outline-none focus:ring-2 focus:ring-cherry/30"
        >
          <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  )
}
