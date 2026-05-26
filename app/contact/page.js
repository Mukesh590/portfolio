export const metadata = {
  title: 'Contact — dev.lab',
}

const contacts = [
  {
    id: 'email',
    label: 'Email',
    value: 'mukesen0204@gmail.com',
    display: 'mukesen0204@gmail.com',
    href: 'mailto:mukesen0204@gmail.com',
    icon: '@',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/mukesen0204',
    display: 'github.com/mukesen0204',
    href: 'https://github.com/mukesen0204',
    icon: '</>',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// contact.init()</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Contact</h1>
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
        </div>

        {/* Intro */}
        <p className="text-zinc-400 text-base leading-relaxed mb-10">
          Interested in collaborating, have a question, or want to talk about a project?
          Reach out through any of the channels below.
        </p>

        {/* Contact cards */}
        <div className="space-y-3 mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 border border-zinc-800 rounded-lg bg-zinc-900/40 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-200 shrink-0">
                <span className="text-accent font-mono text-xs font-bold">{contact.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="text-zinc-600 text-xs font-mono mb-0.5">{contact.label}</p>
                <p className="text-zinc-100 font-mono text-sm truncate group-hover:text-accent transition-colors duration-200">
                  {contact.display}
                </p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 font-mono shrink-0">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Terminal-style note */}
        <div className="p-5 border border-zinc-800/60 rounded-lg bg-zinc-900/20 font-mono">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-800" />
            <div className="w-3 h-3 rounded-full bg-yellow-800" />
            <div className="w-3 h-3 rounded-full bg-green-800" />
            <span className="text-zinc-700 text-xs ml-2">terminal</span>
          </div>
          <p className="text-zinc-700 text-xs mb-1.5">
            <span className="text-accent">$</span>{' '}
            echo &quot;Response time is usually within 24-48 hours&quot;
          </p>
          <p className="text-zinc-500 text-xs pl-4">
            Response time is usually within 24-48 hours
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            <span className="text-accent">$</span>{' '}
            <span className="cursor-blink">█</span>
          </p>
        </div>
      </div>
    </main>
  )
}
