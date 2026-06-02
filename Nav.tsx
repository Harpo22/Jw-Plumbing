'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <div className="nav-logo-img">
              <Image src="/images/logo.png" alt="JW Plumbing logo" width={44} height={44} style={{ objectFit: 'cover' }} />
            </div>
            <div className="nav-brand">
              JW Plumbing<span>Plumbing + Heating</span>
            </div>
          </Link>

          <div className="nav-links">
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link href="/bathroom-renovations" className={isActive('/bathroom-renovations') ? 'active' : ''}>Bathrooms</Link>
            <Link href="/boiler-services" className={isActive('/boiler-services') ? 'active' : ''}>Boiler Services</Link>
            <Link href="/emergency-plumbing" className={isActive('/emergency-plumbing') ? 'active' : ''}>Emergency</Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <a href={`tel:${PHONE}`} className="nav-cta">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/bathroom-renovations" onClick={() => setMenuOpen(false)}>Bathroom Renovations</Link>
        <Link href="/boiler-services" onClick={() => setMenuOpen(false)}>Boiler Services</Link>
        <Link href="/emergency-plumbing" onClick={() => setMenuOpen(false)}>Emergency Plumbing</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href={`tel:${PHONE}`} className="mob-cta">📞 Call Now: {PHONE_DISPLAY}</a>
      </div>
    </>
  )
}
