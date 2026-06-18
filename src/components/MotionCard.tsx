import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface MotionCardProps extends PropsWithChildren {
  className?: string
  delay?: number
  hoverLift?: boolean
}

export function MotionCard({
  children,
  className = '',
  delay = 0,
  hoverLift = true,
}: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      whileHover={hoverLift ? { y: -6, scale: 1.01 } : {}}
      className={`rounded-[1.75rem] border border-beige/60 bg-gradient-to-br from-cream/90 to-beige/30 p-6 shadow-[0_18px_55px_rgba(62,39,35,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_24px_70px_rgba(178,34,34,0.1)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
