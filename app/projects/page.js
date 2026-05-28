import Link from 'next/link'

export const metadata = {
  title: 'Projects — dev.lab',
}

const projects = [
  {
    id: 1,
    title: 'Traffic Optimization AI',
    subtitle: 'Simulation',
    description:
      'A reinforcement learning simulation that optimizes traffic signal timing across a city grid. Models vehicle flow patterns to minimize average wait time and improve throughput.',
    tech: ['Python', 'Reinforcement Learning', 'NumPy', 'Simulation'],
    status: 'Active',
    type: 'AI / Simulation',
    entry: '001',
    href: 'https://traffic-sim-phi.vercel.app',
    external: true,
  },
  {
    id: 2,
    title: 'Algorithmic Trading Bot',
    subtitle: 'FinTech',
    description:
      'Automated trading system that analyzes market indicators and executes buy/sell decisions. Includes a backtesting framework to evaluate strategies against historical OHLCV data.',
    tech: ['Python', 'Algorithms', 'Data Analysis', 'Finance'],
    status: 'Active',
    type: 'FinTech',
    entry: '002',
    href: '/projects/trading-bot',
  },
  {
    id: 3,
    title: 'Project [CLASSIFIED]',
    subtitle: 'Unknown',
    description: 'Next project currently in development. Details will be revealed once the initial build is ready. Stay tuned.',
    tech: ['???'],
    status: 'Coming Soon',
    type: '???',
    entry: '003',
    placeholder: true,
  },
]

function StatusBadge({ status }) {
  const isActive = status === 'Active'
  return (
    <span
      className={`text-xs font-mono px-2 py-0.5 rounded border ${
        isActive
          ? 'text-green-400 border-green-800/60 bg-green-900/20'
          : 'text-zinc-600 border-zinc-800'
      }`}
    >
      {isActive ? '● ' : '○ '}
      {status}
    </span>
  )
}

function ProjectCard({ project }) {
  const Tag = project.href ? Link : 'div'
  return (
    <Tag
      href={project.href}
      {...(project.external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`flex flex-col p-6 border rounded-lg transition-all duration-200 group ${
        project.placeholder
          ? 'border-zinc-800 border-dashed bg-transparent'
          : 'border-zinc-800 bg-zinc-900/40 hover:border-accent/40 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(0,217,255,0.04)]'
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-zinc-700 font-mono text-xs">[{project.entry}]</span>
        <StatusBadge status={project.status} />
      </div>

      {/* Type tag */}
      <span className="inline-block mb-3 text-xs px-2 py-0.5 border border-zinc-800 text-zinc-600 font-mono rounded w-fit">
        {project.type}
      </span>

      {/* Title */}
      <h2
        className={`text-lg font-bold font-mono leading-tight mb-3 transition-colors duration-200 ${
          project.placeholder
            ? 'text-zinc-700'
            : 'text-zinc-100 group-hover:text-accent'
        }`}
      >
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-500 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </Tag>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// projects.list</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Projects</h1>
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          <p className="text-zinc-500 mt-4 text-sm font-mono">
            {projects.length} entries &mdash; sorted by relevance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
