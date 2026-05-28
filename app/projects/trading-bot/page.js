import Link from 'next/link'
import PnLChart from './PnLChart'

export const metadata = {
  title: 'Algorithmic Trading Bot — dev.lab',
}

const metrics = [
  { label: 'Total P&L', value: '+$2,240', sub: 'YTD (placeholder)', color: 'text-green-400' },
  { label: 'Win Rate', value: '73%', sub: '48 of 66 trades', color: 'text-accent' },
  { label: 'Active Positions', value: '2', sub: 'of 3 max concurrent', color: 'text-zinc-100' },
  { label: 'Total Trades', value: '66', sub: 'since inception', color: 'text-zinc-100' },
]

const strategyItems = [
  {
    tag: 'LEG 1',
    title: 'Call Credit Spread',
    desc: 'Sell a call ~2.5% OTM, then buy a call 5 strikes higher as a defined-risk cap. Collects premium when the stock stays flat or falls. Max loss is limited to the width of the spread minus the credit received.',
    color: 'border-accent/30 bg-accent/5',
    tagColor: 'text-accent border-accent/40',
  },
  {
    tag: 'LEG 2',
    title: 'Cash-Secured Put',
    desc: 'Sell a put ~2.5% OTM, secured by cash equal to the strike price × 100. Earns premium when the stock stays flat or rises. Acts as a synthetic long with built-in income, or forces entry at a discount if assigned.',
    color: 'border-purple-500/30 bg-purple-500/5',
    tagColor: 'text-purple-400 border-purple-500/40',
  },
  {
    tag: 'RISK',
    title: 'VIX Gates',
    desc: 'No new trades when VIX > 40 (market panic). Half-size positions when VIX is between 30 and 40. Normal size below 30. Prevents selling cheap premium into explosive volatility.',
    color: 'border-yellow-500/30 bg-yellow-500/5',
    tagColor: 'text-yellow-400 border-yellow-500/40',
  },
  {
    tag: 'MGMT',
    title: 'Position Management',
    desc: 'Maximum 3 concurrent positions across MSFT, AAPL, AMZN, and META. Close positions at 50–70% of max profit — a proven theta-decay harvest point that avoids holding through gamma risk near expiry.',
    color: 'border-zinc-700/60 bg-zinc-800/30',
    tagColor: 'text-zinc-400 border-zinc-700',
  },
]

export default function TradingBotPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="mb-14 relative">
          <div className="absolute -top-8 -left-6 w-72 h-72 bg-accent/4 rounded-full blur-3xl pointer-events-none" />
          <p className="text-accent font-mono text-sm mb-2 relative">// projects / trading-bot</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-5 relative">
            Algorithmic Trading Bot
          </h1>
          <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            A Python-based options income bot that runs a{' '}
            <span className="text-accent font-mono">call credit spread</span> +{' '}
            <span className="text-purple-400 font-mono">cash-secured put</span> strategy on{' '}
            <span className="text-zinc-200">MSFT, AAPL, AMZN,</span> and{' '}
            <span className="text-zinc-200">META</span>. Designed to collect consistent theta decay
            while keeping risk strictly defined. VIX-gated and size-managed for discipline in volatile markets.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {['Python', 'Options', 'Theta Decay', 'Risk Management', 'FinTech'].map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-500 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <section className="mb-14">
          <p className="text-accent font-mono text-xs mb-5 tracking-widest uppercase">// live_metrics</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 border border-zinc-800 rounded-lg bg-zinc-900/40 flex flex-col gap-1"
              >
                <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">{m.label}</span>
                <span className={`text-2xl font-bold font-mono ${m.color}`}>{m.value}</span>
                <span className="text-zinc-700 font-mono text-xs">{m.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* P&L Chart */}
        <section className="mb-14">
          <p className="text-accent font-mono text-xs mb-5 tracking-widest uppercase">// pnl_chart</p>
          <div className="border border-zinc-800 rounded-lg bg-zinc-900/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400 font-mono text-sm">Cumulative P&amp;L — 2025</span>
              <span className="text-zinc-700 font-mono text-xs">placeholder data</span>
            </div>
            <PnLChart />
          </div>
        </section>

        {/* Strategy */}
        <section className="mb-14">
          <p className="text-accent font-mono text-xs mb-5 tracking-widest uppercase">// strategy_overview</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {strategyItems.map((item) => (
              <div
                key={item.tag}
                className={`p-5 border rounded-lg ${item.color}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <h3 className="text-zinc-100 font-mono font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border border-zinc-800 rounded-lg bg-zinc-900/40">
          <div className="flex-1">
            <p className="text-zinc-100 font-mono font-semibold text-sm mb-1">Source Code</p>
            <p className="text-zinc-600 font-mono text-xs">View the full strategy engine, backtester, and risk manager on GitHub.</p>
          </div>
          <a
            href="https://github.com/Mukesh590/trading-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-black font-mono font-bold text-sm rounded hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_rgba(0,217,255,0.25)] shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Bot Code on GitHub
          </a>
        </section>

        {/* Back */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="text-zinc-600 hover:text-accent font-mono text-sm transition-colors duration-200"
          >
            ← back to projects
          </Link>
        </div>
      </div>
    </main>
  )
}
