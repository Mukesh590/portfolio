'use client'

import { useRef, useEffect } from 'react'

/**
 * Lightweight canvas "data network" background: drifting nodes linked by
 * hairlines when near, with a soft cursor-attraction zone. Pure 2D canvas
 * (no WebGL dependency). Caps node count by viewport area, throttles DPR,
 * and fully disables itself under prefers-reduced-motion.
 */
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let nodes = []
    const mouse = { x: -9999, y: -9999 }

    const LINK_DIST = 130
    const MOUSE_DIST = 170

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.min(90, Math.floor((w * h) / 16000))
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1

        // gentle cursor attraction
        const mdx = mouse.x - n.x
        const mdy = mouse.y - n.y
        const md = Math.hypot(mdx, mdy)
        if (md < MOUSE_DIST && md > 0.1) {
          const pull = (1 - md / MOUSE_DIST) * 0.45
          n.x += (mdx / md) * pull
          n.y += (mdy / md) * pull
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            const o = (1 - d / LINK_DIST) * 0.4
            ctx.strokeStyle = `rgba(34, 224, 255, ${o})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const near = Math.hypot(mouse.x - n.x, mouse.y - n.y) < MOUSE_DIST
        ctx.fillStyle = near ? 'rgba(52, 255, 176, 0.9)' : 'rgba(34, 224, 255, 0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? 1.9 : 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  )
}
