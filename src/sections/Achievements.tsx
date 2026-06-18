import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { achievements } from '../data/portfolio'

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(178,34,34,0.03),transparent_50%)] pointer-events-none" />
      <SectionHeader
        eyebrow="Achievements"
        title="Signals of initiative, resilience, and product curiosity."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-beige/60 bg-gradient-to-br from-cream/90 to-beige/30 p-6 shadow-[0_18px_55px_rgba(62,39,35,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_24px_70px_rgba(178,34,34,0.1)]"
          >
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-cherry/5 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-cherry/10" />
            <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cherry/10 to-deepbrown/8 text-cherry">
              <Trophy size={22} />
            </div>
            <p className="relative font-semibold leading-7 text-deepbrown/70">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
