'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'home', n: '01' },
  { href: '/about', label: 'about', n: '02' },
  { href: '/projects', label: 'projects', n: '03' },
  { href: '/devlogs', label: 'devlogs', n: '04' },
  { href: '/contact', label: 'contact', n: '05' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? 'border-zinc-800/70 bg-background/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-mono text-accent font-bold text-lg leading-none glow-accent">
              &lt;/&gt;
            </span>
            <span className="font-mono text-zinc-100 font-medium tracking-tight group-hover:text-accent transition-colors duration-200">
              dev.lab
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group text-sm font-mono transition-colors duration-200 ${
                    active ? 'text-accent' : 'text-zinc-500 hover:text-zinc-100'
                  }`}
                >
                  <span className="text-zinc-700 mr-1 text-xs">{link.n}</span>
                  {link.label}
                  <span
                    className={`block h-px bg-accent transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-3 border-t border-zinc-800/60 flex flex-col gap-1 bg-background/95 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-mono px-3 py-2 rounded transition-colors duration-150 ${
                    active
                      ? 'text-accent bg-accent/5'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                  }`}
                >
                  <span className="text-zinc-700 mr-2">{link.n}</span>
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
