import { CopyButton } from '../components/CopyButton'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { contactLinks } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(178,34,34,0.03),transparent_50%)] pointer-events-none" />
      <SectionHeader
        eyebrow="Contact"
        title="Open to learning, building, and meaningful opportunities."
      />
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {contactLinks.map((contact, index) => {
          const Icon = contact.icon
          return (
            <MotionCard key={contact.label} delay={index * 0.05}>
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cherry/10 to-deepbrown/8 text-cherry">
                  <Icon size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-deepbrown/40">
                    {contact.label}
                  </p>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="mt-1 block truncate text-base font-bold text-deepbrown transition-colors hover:text-cherry"
                  >
                    {contact.value}
                  </a>
                </div>
                {contact.copyValue ? <CopyButton value={contact.copyValue} /> : null}
              </div>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}
