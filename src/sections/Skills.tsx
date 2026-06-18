import { motion } from 'framer-motion'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { skillGroups } from '../data/portfolio'

const groupAccents = [
  { bg: 'bg-cherry/5', border: 'border-cherry/15', dot: 'bg-cherry' },
  { bg: 'bg-deepbrown/5', border: 'border-deepbrown/15', dot: 'bg-deepbrown' },
  { bg: 'bg-beige/60', border: 'border-beige/80', dot: 'bg-cherry/50' },
]

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(62,39,35,0.03),transparent_50%)] pointer-events-none" />
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit, growing with every build."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <MotionCard key={group.title} delay={index * 0.08}>
            <div className="flex items-center gap-3 mb-5">
              <span className={`block h-3 w-3 rounded-full ${groupAccents[index].dot}`} />
              <h3 className="font-heading text-xl font-bold text-deepbrown">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, sIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 + sIndex * 0.04 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold text-deepbrown/80 shadow-sm backdrop-blur transition-colors ${groupAccents[index].bg} ${groupAccents[index].border}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
