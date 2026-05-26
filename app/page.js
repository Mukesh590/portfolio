import Link from 'next/link'

const techTags = ['AI / ML', 'Python', 'JavaScript', 'Next.js', 'Optimization', 'Systems']

const highlights = [
  {
    label: 'Active Projects',
    value: '2',
    sub: '+ more in development',
    href: '/projects',
    icon: '⬡',
  },
  {
    label: 'Devlog Entries',
    value: '3',
    sub: 'notes from the lab',
    href: '/devlogs',
    icon: '///',
  },
  {
    label: 'Focus Area',
    value: 'AI & Opt.',
    sub: 'engineering × intelligence',
    href: '/about',
    icon: '∿',
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-16">
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-2/5 rounded-full blur-3xl pointer-events-none glow-pulse"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24">
          {/* Status */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
              system online &mdash; available to collaborate
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-5 tracking-tight leading-none">
            <span className="text-zinc-100">Hi, I&apos;m </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--accent) 0%, #a855f7 100%)' }}
            >
              Mukesh Sendhilkumar
            </span>
          </h1>

          {/* Terminal line */}
          <div className="flex flex-wrap items-center gap-2 mb-6 font-mono">
            <span className="text-accent text-lg select-none">$</span>
            <span className="text-zinc-300 text-lg sm:text-xl">whoami</span>
            <span className="text-zinc-600 text-lg sm:text-xl mx-1">&mdash;</span>
            <span className="text-zinc-300 text-base sm:text-lg">high school student</span>
            <span className="text-accent text-xl cursor-blink select-none">█</span>
          </div>

          {/* Bio */}
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-10">
            Interested in{' '}
            <span className="text-accent font-medium">AI</span>,{' '}
            <span className="text-zinc-200 font-medium">engineering</span>, and{' '}
            <span className="text-accent-2 font-medium">optimization systems</span>.
            Building tools that model, predict, and solve real-world problems through code.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/projects"
              className="px-6 py-3 bg-accent text-black font-mono font-bold text-sm rounded hover:brightness-110 transition-all duration-200 shadow-[0_0_24px_rgba(0,217,255,0.3)]"
            >
              ./view-projects
            </Link>
            <Link
              href="/devlogs"
              className="px-6 py-3 border border-zinc-700 text-zinc-300 font-mono text-sm rounded hover:border-accent hover:text-accent transition-all duration-200"
            >
              ./read-devlogs
            </Link>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-zinc-800 text-zinc-600 font-mono text-xs rounded hover:border-zinc-600 hover:text-zinc-400 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-700">
          <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
          <svg
            className="scroll-bounce"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M3 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-zinc-600 font-mono text-xs mb-8 tracking-widest uppercase">
            // quick_nav
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group p-6 border border-zinc-800 rounded-lg bg-zinc-900/30 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zinc-700 font-mono text-xl group-hover:text-accent transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span className="text-zinc-700 group-hover:text-accent transition-colors duration-200 font-mono text-sm">
                    →
                  </span>
                </div>
                <p className="text-2xl font-bold font-mono text-zinc-100 mb-1 group-hover:text-accent transition-colors duration-200">
                  {item.value}
                </p>
                <p className="text-zinc-400 text-sm font-medium mb-0.5">{item.label}</p>
                <p className="text-zinc-700 font-mono text-xs">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
