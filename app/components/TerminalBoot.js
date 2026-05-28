'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Terminal that types itself out line by line. Each line is either a command
 * (prefixed with the prompt) or output. Starts when scrolled into view.
 * Under reduced motion it renders fully immediately.
 *
 * lines: [{ type: 'cmd' | 'out' | 'ok', text: string }]
 */
export default function TerminalBoot({ lines = [] }) {
  const [count, setCount] = useState(0) // fully-typed line count
  const [partial, setPartial] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef(null)
  const reduceRef = useRef(false)

  // start on scroll-in
  useEffect(() => {
    reduceRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceRef.current) {
      setStarted(true)
      setDone(true)
      setCount(lines.length)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [lines.length])

  // typing engine
  useEffect(() => {
    if (!started || done || reduceRef.current) return
    if (count >= lines.length) {
      setDone(true)
      return
    }
    const line = lines[count]
    const full = line.text
    if (partial.length < full.length) {
      const speed = line.type === 'cmd' ? 34 : 12
      const t = setTimeout(() => setPartial(full.slice(0, partial.length + 1)), speed)
      return () => clearTimeout(t)
    }
    // line complete, pause then commit
    const pause = line.type === 'cmd' ? 240 : 90
    const t = setTimeout(() => {
      setCount((c) => c + 1)
      setPartial('')
    }, pause)
    return () => clearTimeout(t)
  }, [started, done, count, partial, lines])

  const renderLine = (line, text, key, typing) => {
    const isCmd = line.type === 'cmd'
    return (
      <div key={key} className="flex gap-2 leading-relaxed">
        {isCmd ? (
          <span className="text-accent select-none shrink-0">mukesh@lab:~$</span>
        ) : (
          <span className="text-zinc-700 select-none shrink-0">{line.type === 'ok' ? '✓' : '»'}</span>
        )}
        <span
          className={
            isCmd
              ? 'text-zinc-100'
              : line.type === 'ok'
                ? 'text-signal'
                : 'text-zinc-400'
          }
        >
          {text}
          {typing && <span className="cursor-blink text-accent">█</span>}
        </span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="rounded-xl border border-zinc-800 bg-[#070b11]/90 font-mono text-sm shadow-2xl shadow-black/40 overflow-hidden scanlines relative"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-800/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-signal/70" />
        <span className="ml-3 text-xs text-zinc-600">bio.sh · zsh</span>
      </div>

      <div className="px-4 py-4 space-y-1 min-h-[280px]">
        {lines.slice(0, count).map((line, i) => renderLine(line, line.text, i, false))}
        {!done && started && count < lines.length &&
          renderLine(lines[count], partial, 'active', true)}
        {done && (
          <div className="flex gap-2 pt-1">
            <span className="text-accent select-none">mukesh@lab:~$</span>
            <span className="cursor-blink text-accent">█</span>
          </div>
        )}
      </div>
    </div>
  )
}
