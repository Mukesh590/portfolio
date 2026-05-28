import Reveal from '../components/Reveal'

export const metadata = {
  title: 'Contact',
}

const contacts = [
  {
    id: 'email',
    label: 'Email',
    display: 'mukesen0204@gmail.com',
    href: 'mailto:mukesen0204@gmail.com',
    icon: '@',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    display: 'github.com/Mukesh590',
    href: 'https://github.com/Mukesh590',
    icon: '</>',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// contact.init()</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-4">Contact</h1>
          <div className="rule-accent w-full" />
        </Reveal>

        <Reveal className="mb-10">
          <p className="text-zinc-400 text-base leading-relaxed">
            Building something interesting, have a question, or want to talk shop about AI and
            markets? Reach out through any channel below.
          </p>
        </Reveal>

        <Reveal className="space-y-3 mb-12" stagger={0.1}>
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-surface/50 hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-200 group"
            >
              <div className="h-11 w-11 rounded-lg border border-zinc-700 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-200 shrink-0">
                <span className="text-accent font-mono text-xs font-bold">{c.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="text-zinc-600 text-xs font-mono mb-0.5">{c.label}</p>
                <p className="text-zinc-100 font-mono text-sm truncate group-hover:text-accent transition-colors">
                  {c.display}
                </p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-accent group-hover:translate-x-1 transition-all font-mono shrink-0">
                →
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal>
          <div className="p-5 rounded-xl border border-zinc-800/60 bg-[#070b11]/80 font-mono scanlines relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-signal/60" />
              <span className="text-zinc-600 text-xs ml-2">terminal</span>
            </div>
            <p className="text-zinc-500 text-xs mb-1.5">
              <span className="text-accent">$</span> echo $RESPONSE_TIME
            </p>
            <p className="text-zinc-300 text-xs pl-3 mb-3">usually within 24-48 hours</p>
            <p className="text-zinc-500 text-xs">
              <span className="text-accent">$</span> <span className="cursor-blink text-accent">█</span>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
