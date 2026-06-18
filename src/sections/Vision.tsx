import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'

export function Vision() {
  return (
    <section id="vision" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,34,34,0.04),transparent_60%)] pointer-events-none" />
      <SectionHeader eyebrow="My Vision" title="Building for lasting impact." />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-beige/60 bg-gradient-to-br from-cream/90 via-cream/80 to-beige/30 p-8 shadow-[0_18px_55px_rgba(62,39,35,0.06)] backdrop-blur-xl sm:p-12"
      >
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cherry/5" />
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-deepbrown/5" />

        <div className="relative flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-6 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-cherry/12 to-deepbrown/10 text-cherry"
          >
            <Rocket size={28} />
          </motion.div>
          <p className="font-heading text-2xl leading-10 text-deepbrown/80 sm:text-3xl sm:leading-11">
            My vision is to build impactful technology products that solve
            meaningful problems, create opportunities, and empower people.
          </p>
          <div className="my-6 h-px w-20 bg-gradient-to-r from-cherry/30 to-deepbrown/15" />
          <p className="text-xl leading-9 text-deepbrown/60">
            I aspire to combine technology, design, and business thinking to
            develop solutions that improve lives and create lasting impact.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
