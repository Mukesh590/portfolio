import Link from 'next/link'
import Reveal from '../components/Reveal'

export const metadata = {
  title: 'Projects',
}

const projects = [
  {
    entry: '001',
    type: 'AI · Simulation',
    title: 'Traffic Optimization AI',
    description:
      'A reinforcement-learning simulation that optimizes traffic-signal timing across a city grid. Models vehicle flow to minimize average wait time and maximize throughput, learning policies that beat fixed-timer baselines.',
    tech: ['Python', 'Reinforcement Learning', 'NumPy', 'Simulation'],
    live: 'https://traffic-sim-phi.vercel.app',
    shot: '/projects/traffic-sim.png',
    status: 'Live',
  },
  {
    entry: '002',
    type: 'FinTech · Automation',
    title: 'Algorithmic Trading Bot',
    description:
      'An options-income engine running defined-risk credit spreads and cash-secured puts on mega-cap tech. VIX-gated position sizing, a backtesting framework, and a live P&L dashboard keep risk strictly bounded.',
    tech: ['Python', 'Options', 'Risk Management', 'Data Analysis'],
    live: 'https://trading-dashboard-theta-lac.vercel.app',
    shot: '/projects/trading-bot.png',
    details: '/projects/trading-bot',
    status: 'Live',
  },
  {
    entry: '003',
    type: 'Optimization',
    title: 'Project [CLASSIFIED]',
    description:
      'Next build in the optimization space, currently in planning. Details will surface once the first prototype is running. Stay tuned.',
    tech: ['???'],
    status: 'In Planning',
    placeholder: true,
  },
]

function ProjectRow({ p, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className={`${flip ? 'lg:order-2' : ''}`}>
        {p.placeholder ? (
          <div className="aspect-[16/10] rounded-xl border border-dashed border-zinc-800 bg-surface/40 flex items-center justify-center grid-bg relative overflow-hidden">
            <span className="font-mono text-zinc-700 text-sm tracking-widest">[ ENCRYPTED ]</span>
          </div>
        ) : (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-zinc-800 bg-[#070b11] overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-2xl shadow-black/30"
          >
            {/* browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800/80 bg-[#0a0e14]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal/60" />
              <span className="ml-3 font-mono text-[10px] text-zinc-600 truncate">
                {p.live.replace('https://', '')}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              <img
                src={p.shot}
                alt={`${p.title} live preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b11] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </a>
        )}
      </div>

      <div className={`${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-zinc-700">[{p.entry}]</span>
          <span className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded px-2 py-0.5">
            {p.type}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-wider rounded px-2 py-0.5 border ${
              p.status === 'Live'
                ? 'text-signal border-signal/30'
                : 'text-zinc-500 border-zinc-700'
            }`}
          >
            {p.status === 'Live' ? '● ' : '○ '}
            {p.status}
          </span>
        </div>

        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight mb-4 ${
            p.placeholder ? 'text-zinc-600' : 'text-zinc-100'
          }`}
        >
          {p.title}
        </h2>

        <p className="text-zinc-500 leading-relaxed mb-6 max-w-xl">{p.description}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {p.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-800/70 text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        {!p.placeholder && (
          <div className="flex flex-wrap gap-3">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-black font-mono font-bold text-sm rounded-md hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_24px_rgba(34,224,255,0.22)]"
            >
              Open Live ↗
            </a>
            {p.details && (
              <Link
                href={p.details}
                className="px-5 py-2.5 border border-zinc-700 text-zinc-200 font-mono text-sm rounded-md hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-200"
              >
                Case Study →
              </Link>
            )}
          </div>
        )}
      </div>
    </Reveal>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-16">
          <p className="text-accent font-mono text-sm mb-2">// projects.index</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-4">Projects</h1>
          <div className="rule-accent w-full" />
          <p className="text-zinc-500 mt-4 text-sm font-mono">
            {projects.length} entries · systems I have designed, built, and shipped.
          </p>
        </Reveal>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <ProjectRow key={p.entry} p={p} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
