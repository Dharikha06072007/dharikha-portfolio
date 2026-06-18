import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { mindsetCards } from '../data/portfolio'

export function Mindset() {
  return (
    <section className="section-shell pt-0">
      <SectionHeader
        eyebrow="Mindset"
        title="How Dharikha approaches ambiguous problems."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mindsetCards.map((card, index) => {
          const Icon = card.icon
          return (
            <MotionCard key={card.title} delay={index * 0.04}>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cherry/10 to-deepbrown/8 text-cherry">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-deepbrown">
                {card.title}
              </h3>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}
