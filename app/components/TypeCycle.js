'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Typewriter that cycles through phrases: types one out, holds, deletes,
 * advances to the next. Under reduced motion it shows the first phrase
 * statically. Renders its own blinking caret.
 */
export default function TypeCycle({
  phrases = [],
  typeSpeed = 70,
  deleteSpeed = 38,
  hold = 1400,
  className = '',
}) {
  const [text, setText] = useState('')
  const [reduce, setReduce] = useState(false)
  const idx = useRef(0)
  const phase = useRef('typing') // typing | holding | deleting

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] || '')
      return
    }
    let timer
    const tick = () => {
      const current = phrases[idx.current] || ''
      if (phase.current === 'typing') {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          phase.current = 'holding'
          timer = setTimeout(tick, hold)
          return
        }
        timer = setTimeout(tick, typeSpeed)
      } else if (phase.current === 'holding') {
        phase.current = 'deleting'
        timer = setTimeout(tick, deleteSpeed)
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1))
        setText(next)
        if (next === '') {
          phase.current = 'typing'
          idx.current = (idx.current + 1) % phrases.length
          timer = setTimeout(tick, typeSpeed)
          return
        }
        timer = setTimeout(tick, deleteSpeed)
      }
    }
    timer = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timer)
  }, [text, reduce, phrases, typeSpeed, deleteSpeed, hold])

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-accent">_</span>
    </span>
  )
}
