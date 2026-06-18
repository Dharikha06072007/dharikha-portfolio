import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Badge } from '../components/Badge'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { interests } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(178,34,34,0.04),transparent_50%)] pointer-events-none" />
      <SectionHeader
        eyebrow="About Me"
        title="A builder learning to turn curiosity into useful products."
        description="I'm a technology enthusiast, builder, and aspiring entrepreneur passionate about creating solutions that solve real-world problems and create meaningful impact."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionCard>
          <div className="space-y-5 text-lg leading-8 text-deepbrown/75">
            <p>
              Currently pursuing my B.Tech degree at Karunya Institute of
              Technology and Sciences, I believe technology is more than just
              writing code. It's about creating value, empowering communities,
              and transforming ideas into reality.
            </p>
            <p>
              My journey began at Daniel Thomas Matric Higher Secondary School,
              where curiosity sparked my interest in innovation and
              problem-solving.
            </p>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-cherry/30 via-deepbrown/15 to-transparent"
          />
        </MotionCard>
        <MotionCard delay={0.08}>
          <div className="flex items-center gap-3 mb-5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cherry/8 text-cherry">
              <Sparkles size={20} />
            </div>
            <h3 className="font-heading text-xl font-bold text-deepbrown">
              Interests I keep coming back to
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {interests.map((interest) => (
              <Badge key={interest} variant="accent">{interest}</Badge>
            ))}
          </div>
        </MotionCard>
      </div>
    </section>
  )
}
