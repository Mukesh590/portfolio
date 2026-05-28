import Reveal from '../components/Reveal'

export const metadata = {
  title: 'Devlogs',
}

const devlogs = [
  {
    entry: '003',
    title: 'Building a Traffic AI: The Setup',
    date: '2026-05-20',
    excerpt:
      'Getting started with reinforcement learning for traffic simulation. Choosing the environment, shaping the reward, and building a baseline agent before diving into Q-learning variants and the exploration-exploitation tradeoff.',
    tags: ['AI', 'Reinforcement Learning', 'Python'],
    readTime: '5 min',
  },
  {
    entry: '002',
    title: 'Why Backtesting Is Harder Than It Looks',
    date: '2026-05-10',
    excerpt:
      'A deep dive into the pitfalls of backtesting trading strategies: data-snooping bias, survivorship bias, look-ahead leakage, and how to build a proper out-of-sample validation pipeline you can actually trust.',
    tags: ['Trading', 'Algorithms', 'Finance'],
    readTime: '7 min',
  },
  {
    entry: '001',
    title: 'First Steps into the Next.js App Router',
    date: '2026-04-28',
    excerpt:
      'Notes on the App Router mental model: Server vs Client Components, layout nesting, and how the routing paradigm differs from what I knew. Tailwind v4 turned out to be a big shift too.',
    tags: ['Next.js', 'Web Dev', 'Notes'],
    readTime: '4 min',
  },
]

export default function DevlogsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-14">
          <p className="text-accent font-mono text-sm mb-2">// devlogs.feed</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-4">Devlogs</h1>
          <div className="rule-accent w-full" />
          <p className="text-zinc-500 mt-4 text-sm">
            Notes from the lab. Progress reports. Things I learned the hard way.
          </p>
        </Reveal>

        {/* timeline */}
        <div className="relative">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-zinc-800/70 hidden sm:block" />
          <Reveal className="space-y-6" stagger={0.14}>
            {devlogs.map((post) => (
              <article
                key={post.entry}
                className="group relative sm:pl-12 cursor-pointer"
              >
                {/* node */}
                <span className="absolute left-0 top-7 hidden sm:flex h-4 w-4 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-background group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(34,224,255,0.6)] transition-all duration-300" />
                </span>

                <div className="p-6 rounded-xl border border-zinc-800 bg-surface/50 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-700">[{post.entry}]</span>
                      <time className="text-zinc-500">{post.date}</time>
                    </div>
                    <span className="text-zinc-600">{post.readTime} read</span>
                  </div>

                  <h2 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-zinc-600 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-4">
                      read →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="font-mono text-xs text-zinc-700">end of feed</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
      </div>
    </main>
  )
}
