import { motion } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-cream"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative grid place-items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
          className="h-20 w-20 rounded-full border-4 border-cherry/10 border-t-cherry"
        />
        <span className="absolute text-sm font-bold text-deepbrown">DU</span>
      </div>
    </motion.div>
  )
}
