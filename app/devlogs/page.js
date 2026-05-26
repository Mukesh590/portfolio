export const metadata = {
  title: 'Devlogs — dev.lab',
}

const devlogs = [
  {
    id: 1,
    entry: '003',
    title: 'Building a Traffic AI: The Setup',
    date: '2026-05-20',
    excerpt:
      'Getting started with reinforcement learning for traffic simulation. Choosing the right environment, reward shaping, and building a baseline agent before diving into Q-learning variants.',
    tags: ['AI', 'Reinforcement Learning', 'Python'],
    readTime: '5 min',
  },
  {
    id: 2,
    entry: '002',
    title: 'Why Backtesting is Harder Than It Looks',
    date: '2026-05-10',
    excerpt:
      'Deep dive into the pitfalls of backtesting trading strategies — data snooping bias, survivorship bias, look-ahead leakage, and how to build a proper out-of-sample validation pipeline.',
    tags: ['Trading', 'Algorithms', 'Finance'],
    readTime: '7 min',
  },
  {
    id: 3,
    entry: '001',
    title: 'First Steps into Next.js App Router',
    date: '2026-04-28',
    excerpt:
      'Notes on the App Router mental model — Server vs Client Components, layout nesting, and how the new routing paradigm differs from what I was used to. Also, Tailwind v4 is a big shift.',
    tags: ['Next.js', 'Web Dev', 'Notes'],
    readTime: '4 min',
  },
]

function DevlogCard({ post }) {
  return (
    <article className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/40 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-zinc-700 font-mono text-xs">[{post.entry}]</span>
          <time className="text-zinc-600 font-mono text-xs">{post.date}</time>
        </div>
        <span className="text-zinc-700 font-mono text-xs">{post.readTime} read</span>
      </div>

      <h2 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
        {post.title}
      </h2>

      <p className="text-zinc-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-500 font-mono">
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-zinc-700 font-mono text-xs group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 ml-4 shrink-0">
          read →
        </span>
      </div>
    </article>
  )
}

export default function DevlogsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// devlogs.feed</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Devlogs</h1>
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          <p className="text-zinc-500 mt-4 text-sm">
            Notes from the lab. Progress reports. Things I learned the hard way.
          </p>
        </div>

        {/* Feed */}
        <div className="space-y-4">
          {devlogs.map((post) => (
            <DevlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* End marker */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-700 font-mono text-xs">end of feed</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
      </div>
    </main>
  )
}
