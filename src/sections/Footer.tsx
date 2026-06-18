import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="px-5 pb-10 text-center sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-beige/60 bg-gradient-to-br from-cream/80 to-beige/20 px-6 py-10 shadow-[0_20px_70px_rgba(62,39,35,0.06)] backdrop-blur-xl"
      >
        <p className="font-heading text-2xl font-bold text-deepbrown">
          &ldquo;I don't wait for opportunities to appear. I build them.&rdquo;
        </p>
        <div className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-cherry/30 to-beige" />
        <p className="text-sm font-semibold text-deepbrown/45">
          Dharikha U &copy; 2026
        </p>
      </motion.div>
    </footer>
  )
}
