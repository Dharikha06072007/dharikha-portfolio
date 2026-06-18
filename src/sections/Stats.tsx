import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'

export function Stats() {
  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-beige/60 bg-gradient-to-br from-cream/80 to-beige/20 p-5 shadow-[0_20px_70px_rgba(62,39,35,0.06)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="rounded-[1.5rem] bg-gradient-to-br from-beige/50 to-cream/80 p-6 text-center"
          >
            <p className="font-heading text-4xl font-black text-deepbrown">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-deepbrown/45">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
