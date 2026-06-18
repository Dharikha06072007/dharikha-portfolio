import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="inline-block rounded-full border border-cherry/15 bg-cherry/6 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-cherry"
      >
        {eyebrow}
      </motion.span>
      <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-deepbrown sm:text-5xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-deepbrown/60">
          {description}
        </p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cherry/20 to-transparent" />
    </motion.div>
  )
}
