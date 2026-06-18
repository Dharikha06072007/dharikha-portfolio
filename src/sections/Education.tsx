import { GraduationCap } from 'lucide-react'
import { Badge } from '../components/Badge'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader
        eyebrow="Education"
        title="A timeline shaped by learning and initiative."
      />
      <div className="mx-auto max-w-4xl">
        {education.map((item, index) => (
          <div key={item.institution} className="relative pl-8">
            <span className="absolute left-0 top-2 h-full w-px bg-cherry/15" />
            <span className="absolute left-[-7px] top-2 grid h-4 w-4 place-items-center rounded-full bg-cherry ring-8 ring-cream">
              <span className="h-1.5 w-1.5 rounded-full bg-cream" />
            </span>
            <MotionCard className="mb-6" delay={index * 0.08}>
              <div className="flex items-start gap-3">
                <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cherry/10 to-deepbrown/8 text-cherry">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cherry">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-deepbrown">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-deepbrown/60">
                    {item.credential}
                  </p>
                  {item.focusAreas ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.focusAreas.map((area) => (
                        <Badge key={area} variant="outline">{area}</Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </MotionCard>
          </div>
        ))}
      </div>
    </section>
  )
}
