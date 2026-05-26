'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/devlogs', label: 'Devlogs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-accent font-bold text-lg leading-none">&lt;/&gt;</span>
            <span className="font-mono text-zinc-100 font-medium group-hover:text-accent transition-colors duration-200">
              dev.lab
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-mono transition-colors duration-200 relative pb-0.5 ${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
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
          <div className="md:hidden py-4 border-t border-zinc-800/60 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-mono px-3 py-2 rounded transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-accent bg-accent/5'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <span className="text-zinc-700 mr-2">{pathname === link.href ? '▸' : ' '}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
