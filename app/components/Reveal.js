'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-reveal wrapper. Animates its direct children (staggered) as they
 * enter the viewport using GSAP ScrollTrigger. Collapses to static instantly
 * under prefers-reduced-motion. Children are server-rendered and passed in.
 */
export default function Reveal({
  children,
  stagger = 0.09,
  y = 28,
  duration = 0.85,
  start = 'top 85%',
  as: Tag = 'div',
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.children.length ? Array.from(el.children) : [el]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'all' })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      })
    }, el)

    return () => ctx.revert()
  }, [stagger, y, duration, start])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
