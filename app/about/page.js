export const metadata = {
  title: 'About — dev.lab',
}

const skills = [
  { name: 'Python', level: 'Advanced', category: 'Lang' },
  { name: 'JavaScript', level: 'Advanced', category: 'Lang' },
  { name: 'Next.js', level: 'Intermediate', category: 'Framework' },
  { name: 'AI / ML', level: 'Intermediate', category: 'Domain' },
  { name: 'Data Structures', level: 'Intermediate', category: 'CS' },
  { name: 'Optimization', level: 'Learning', category: 'Domain' },
]

const interests = [
  { title: 'Reinforcement Learning', desc: 'Training agents to make optimal decisions in dynamic environments.' },
  { title: 'Algorithmic Trading', desc: 'Applying quantitative analysis and automation to financial markets.' },
  { title: 'Systems Design', desc: 'Understanding how large-scale systems are architected and optimized.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-mono text-sm mb-2">// about_me.md</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">About</h1>
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
        </div>

        {/* Bio */}
        <div className="mb-14 p-6 border border-zinc-800 rounded-lg bg-zinc-900/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-lg" />
          <div className="pl-2">
            <p className="text-zinc-400 text-base leading-relaxed mb-4">
              I&apos;m a high school student with a deep interest in how software can model, predict, and
              optimize real-world systems. Whether it&apos;s simulating traffic flows or building trading
              algorithms, I&apos;m drawn to problems where math meets code.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Right now, I&apos;m focused on AI/ML fundamentals, building personal projects, and developing
              the skills to work at the intersection of engineering and intelligent systems. Every project
              is a chance to learn something that can&apos;t be taught in a classroom.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-14">
          <p className="text-accent font-mono text-sm mb-2">// skills[]</p>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/40 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-zinc-100 font-mono text-sm font-semibold group-hover:text-accent transition-colors duration-200">
                    {skill.name}
                  </span>
                  <span className="text-zinc-700 text-xs font-mono px-1.5 py-0.5 border border-zinc-800 rounded shrink-0 ml-1">
                    {skill.category}
                  </span>
                </div>
                <span className="text-zinc-600 text-xs font-mono">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <p className="text-accent font-mono text-sm mb-2">// interests[]</p>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Interests</h2>
          <div className="space-y-3">
            {interests.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 border border-zinc-800 rounded-lg bg-zinc-900/40 hover:border-zinc-700 transition-all duration-200"
              >
                <span className="text-zinc-700 font-mono text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-zinc-100 font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
