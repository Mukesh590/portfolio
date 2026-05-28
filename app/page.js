import Link from 'next/link'
import TypeCycle from './components/TypeCycle'
import Reveal from './components/Reveal'

const liveSystems = [
  {
    name: 'Traffic Optimization AI',
    handle: 'traffic-sim',
    desc: 'Reinforcement-learning traffic signal controller minimizing city-grid wait time.',
    href: 'https://traffic-sim-phi.vercel.app',
    stack: 'Python · RL · Sim',
  },
  {
    name: 'Trading Dashboard',
    handle: 'trading-bot',
    desc: 'Options income engine running defined-risk spreads with VIX-gated sizing.',
    href: 'https://trading-dashboard-theta-lac.vercel.app',
    stack: 'Python · Options · Risk',
  },
]

const focus = [
  {
    k: 'think',
    title: 'AI & Reinforcement Learning',
    desc: 'Agents that learn to make optimal decisions in dynamic, high-dimensional environments.',
  },
  {
    k: 'trade',
    title: 'Algorithmic Trading',
    desc: 'Quantitative strategies, backtesting pipelines, and disciplined automated execution.',
  },
  {
    k: 'optimize',
    title: 'Optimization Systems',
    desc: 'Modeling real-world problems as solvable systems and squeezing out the inefficiency.',
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[100dvh] grid-bg overflow-hidden flex items-center pt-16">
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-accent/5 rounded-full blur-3xl pointer-events-none glow-pulse" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* left: identity */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
                </span>
                <span className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase">
                  system online · open to collaborate
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-5">
                <span className="text-zinc-100">Mukesh</span>
                <br />
                <span
                  className="bg-clip-text text-transparent glow-accent"
                  style={{ backgroundImage: 'linear-gradient(120deg, var(--accent), var(--signal))' }}
                >
                  Sendhilkumar
                </span>
              </h1>

              <div className="font-mono text-lg sm:text-xl text-zinc-300 mb-6 h-7">
                <span className="text-zinc-600 select-none">&gt; </span>
                <TypeCycle phrases={['AI Engineer', 'Algo Trader', 'Systems Builder']} />
              </div>

              <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-9">
                Building systems that think, trade, and optimize.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-accent text-black font-mono font-bold text-sm rounded-md hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(34,224,255,0.28)]"
                >
                  View Projects
                </Link>
                <a
                  href="#systems"
                  className="px-6 py-3 border border-zinc-700 text-zinc-200 font-mono text-sm rounded-md hover:border-signal hover:text-signal active:scale-[0.98] transition-all duration-200"
                >
                  See Live Systems
                </a>
              </div>
            </div>

            {/* right: systems monitor */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-zinc-800 bg-[#070b11]/80 backdrop-blur-sm font-mono text-sm shadow-2xl shadow-black/40 overflow-hidden scanlines relative">
                <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3">
                  <span className="text-xs text-zinc-500 tracking-widest uppercase">systems_monitor</span>
                  <span className="text-xs text-signal">● all nominal</span>
                </div>
                <div className="p-4 space-y-3">
                  {liveSystems.map((s) => (
                    <a
                      key={s.handle}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-zinc-800/80 px-3 py-3 hover:border-accent/40 hover:bg-accent/[0.04] transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-zinc-200 group-hover:text-accent transition-colors text-[13px]">
                          {s.name}
                        </span>
                        <span className="text-[10px] text-signal border border-signal/30 rounded px-1.5 py-0.5">
                          LIVE
                        </span>
                      </div>
                      <p className="text-zinc-600 text-xs leading-snug mb-1.5">{s.stack}</p>
                      <span className="text-zinc-700 text-xs group-hover:text-accent transition-colors">
                        ./{s.handle} ↗
                      </span>
                    </a>
                  ))}
                  <div className="flex items-center justify-between pt-1 text-xs text-zinc-700">
                    <span>uptime</span>
                    <div className="flex-1 mx-3 h-px bg-zinc-800 relative overflow-hidden">
                      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/60 to-transparent sweep" />
                    </div>
                    <span className="text-signal">streaming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <a
          href="#systems"
          aria-label="Scroll to live systems"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-accent transition-colors"
        >
          <svg className="scroll-bounce" width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 6l5 5 5-5" />
          </svg>
        </a>
      </section>

      {/* ---------- LIVE SYSTEMS ---------- */}
      <section id="systems" className="py-24 border-t border-zinc-800/40 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-3">// deployed.live</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              Live Systems
            </h2>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-5" stagger={0.12}>
            {liveSystems.map((s) => (
              <a
                key={s.handle}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-6 rounded-xl border border-zinc-800 bg-surface/60 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-16 -top-16 w-44 h-44 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-between mb-4 relative">
                  <span className="font-mono text-xs text-zinc-600">./{s.handle}</span>
                  <span className="text-[10px] font-mono text-signal border border-signal/30 rounded px-2 py-0.5">
                    LIVE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-accent transition-colors mb-2 relative">
                  {s.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5 relative">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto relative">
                  <span className="font-mono text-xs text-zinc-600">{s.stack}</span>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-accent group-hover:translate-x-1 transition-all">
                    open ↗
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- FOCUS ---------- */}
      <section className="py-24 border-t border-zinc-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              What I build
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60 border border-zinc-800/60 rounded-xl bg-surface/40" stagger={0.12}>
            {focus.map((f) => (
              <div key={f.k} className="p-7">
                <span className="font-mono text-xs text-signal tracking-widest uppercase">
                  {f.k}()
                </span>
                <h3 className="text-lg font-semibold text-zinc-100 mt-3 mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-300 hover:text-accent transition-colors group"
            >
              browse the full project index
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
