import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, ExternalLink, Cpu, CircuitBoard } from 'lucide-react'
import { Badge } from '../components/Badge'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio'
import type { Project } from '../types/portfolio'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[2rem] border border-beige/60 bg-gradient-to-br from-cream/90 to-beige/30 p-6 shadow-[0_18px_55px_rgba(62,39,35,0.06)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_28px_80px_rgba(178,34,34,0.1)] sm:p-8"
    >
      <div
        className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-[0.06] transition-all duration-500 group-hover:scale-[2] group-hover:opacity-15"
        style={{ backgroundColor: project.accent }}
      />
      <div
        className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full opacity-[0.04] transition-all duration-500 group-hover:scale-[2.5]"
        style={{ backgroundColor: project.accent }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg shadow-sm"
              style={{
                backgroundColor: `${project.accent}18`,
              }}
            >
              {project.icon}
            </span>
            <h3 className="font-heading text-xl font-bold text-deepbrown sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors duration-300"
            style={{
              backgroundColor: `${project.accent}15`,
              color: project.accent,
            }}
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-4 leading-7 text-deepbrown/65">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cherry/12 bg-cherry/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cherry/80"
              >
                {tag === 'Hardware + IoT Prototype' ? (
                  <Cpu size={12} />
                ) : tag.includes('sensors') || tag.includes('Embedded') ? (
                  <CircuitBoard size={12} />
                ) : null}
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {project.tech.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant={project.accent === '#B22222' ? 'accent' : 'default'}>
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-beige/50 pt-5">
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deepbrown/50 transition-colors hover:text-cherry"
                >
                  {link.label === 'Source Code' || link.label === 'GitHub' ? (
                    <Code2 size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
            {project.hasGitHub ? (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-deepbrown/30">
                Source code available on GitHub
              </span>
            ) : null}
          </div>
        ) : project.hasGitHub ? (
          <div className="mt-5 border-t border-beige/50 pt-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-deepbrown/30">
              <Code2 size={12} />
              Source code available on GitHub
            </span>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

function TimelineDot({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 14,
        delay: 0.05,
      }}
      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] bg-cream shadow-lg shadow-cherry/10"
      style={{ borderColor: project.accent === '#B22222' ? '#B22222' : project.accent }}
    >
      <span className="text-lg">{project.icon}</span>
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute -inset-2 rounded-full border-2 opacity-30"
        style={{
          borderColor: project.accent === '#B22222' ? '#B22222' : project.accent,
        }}
      />
    </motion.div>
  )
}

function DesktopRow({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative hidden lg:flex items-center w-full">
      <div className="flex-1 flex justify-end pr-14">
        {isLeft ? <ProjectCard project={project} index={index} /> : <div />}
      </div>

      <TimelineDot project={project} index={index} />

      <div className="flex-1 flex justify-start pl-14">
        {!isLeft ? <ProjectCard project={project} index={index} /> : <div />}
      </div>
    </div>
  )
}

function MobileRow({ project, index }: { project: Project; index: number }) {
  return (
    <div className="lg:hidden relative flex items-start gap-5 pl-4">
      <div className="flex flex-col items-center">
        <TimelineDot project={project} index={index} />
      </div>
      <div className="flex-1 min-w-0 pt-1.5">
        <ProjectCard project={project} index={index} />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-shell overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(178,34,34,0.04),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(62,39,35,0.03),transparent_50%)] pointer-events-none" />

      <SectionHeader
        eyebrow="Projects"
        title="Product ideas, technical systems, and real-world experiments."
        description="Each project reflects a product-builder lens: the technology matters, but the problem and user value lead."
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-[1.85rem] lg:left-1/2 lg:-translate-x-px inset-y-0 w-0.5 bg-gradient-to-b from-cherry/60 via-cherry/20 to-deepbrown/10 rounded-full" />

        <div className="relative space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              <DesktopRow project={project} index={index} />
              <MobileRow project={project} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-[1.85rem] lg:left-1/2 lg:-translate-x-px w-3 h-3 rounded-full bg-cherry/30" />
      </div>
    </section>
  )
}
