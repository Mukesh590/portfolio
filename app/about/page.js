import Link from 'next/link'
import Reveal from '../components/Reveal'
import TerminalBoot from '../components/TerminalBoot'

export const metadata = {
  title: 'About',
}

const bioLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Mukesh Sendhilkumar, high school student and systems builder.' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'I build software that models, predicts, and optimizes real-world systems:' },
  { type: 'out', text: 'AI agents, trading strategies, and the math that makes them work.' },
  { type: 'cmd', text: 'cat now.txt' },
  { type: 'out', text: 'Currently deep in reinforcement learning, quant trading, and systems design.' },
  { type: 'ok', text: 'every project teaches something a classroom never could.' },
]

const stack = [
  { name: 'Python', slug: 'python', level: 'Advanced' },
  { name: 'JavaScript', slug: 'javascript', level: 'Advanced' },
  { name: 'React', slug: 'react', level: 'Intermediate' },
  { name: 'Next.js', slug: 'nextdotjs', level: 'Intermediate' },
  { name: 'NumPy', slug: 'numpy', level: 'Intermediate' },
  { name: 'Pandas', slug: 'pandas', level: 'Intermediate' },
  { name: 'PyTorch', slug: 'pytorch', level: 'Learning' },
  { name: 'Tailwind', slug: 'tailwindcss', level: 'Advanced' },
  { name: 'Git', slug: 'git', level: 'Intermediate' },
  { name: 'Linux', slug: 'linux', level: 'Intermediate' },
]

const building = [
  {
    title: 'Traffic Optimization AI',
    state: 'live',
    desc: 'Tuning the reward function so the RL controller generalizes across grid layouts.',
  },
  {
    title: 'Algorithmic Trading Bot',
    state: 'live',
    desc: 'Hardening the backtester and risk manager before letting it run on paper money.',
  },
  {
    title: 'Project [CLASSIFIED]',
    state: 'planning',
    desc: 'Next build in the optimization space. Details once the first prototype runs.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* header */}
        <Reveal className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// about_me.md</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-4">About</h1>
          <div className="rule-accent w-full" />
        </Reveal>

        {/* terminal bio */}
        <div className="mb-16">
          <TerminalBoot lines={bioLines} />
        </div>

        {/* tech stack */}
        <div className="mb-16">
          <Reveal className="mb-7">
            <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-2">// stack[]</p>
            <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Tech Stack</h2>
          </Reveal>
          <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" stagger={0.05}>
            {stack.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-surface/50 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-200 group"
              >
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/e6edf3`}
                  alt={t.name}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="text-center">
                  <p className="font-mono text-sm text-zinc-200">{t.name}</p>
                  <p className="font-mono text-[10px] text-zinc-600 mt-0.5">{t.level}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* currently building */}
        <div>
          <Reveal className="mb-7">
            <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-2">// currently_building</p>
            <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Currently Building</h2>
          </Reveal>
          <Reveal className="space-y-3" stagger={0.1}>
            {building.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-zinc-800 bg-surface/40 hover:border-zinc-700 transition-colors"
              >
                <span
                  className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${
                    b.state === 'live' ? 'bg-signal' : 'bg-zinc-600'
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-zinc-100">{b.title}</h3>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider rounded px-1.5 py-0.5 border ${
                        b.state === 'live'
                          ? 'text-signal border-signal/30'
                          : 'text-zinc-500 border-zinc-700'
                      }`}
                    >
                      {b.state}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-300 hover:text-accent transition-colors group"
            >
              see the projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
