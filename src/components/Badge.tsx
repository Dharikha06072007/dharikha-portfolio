import { motion } from 'framer-motion'

interface BadgeProps {
  children: string
  variant?: 'default' | 'accent' | 'outline'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default:
      'border-beige/70 bg-cream/80 text-deepbrown/80 shadow-sm',
    accent:
      'border-cherry/20 bg-cherry/8 text-cherry font-bold shadow-sm',
    outline:
      'border-deepbrown/15 bg-transparent text-deepbrown/70',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -2 }}
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase backdrop-blur transition-colors ${styles[variant]}`}
    >
      {children}
    </motion.span>
  )
}
