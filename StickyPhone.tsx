'use client'

import { useEffect, useRef, useState } from 'react'

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

export default function StickyPhone() {
  const [hidden, setHidden] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Hide sticky button when footer or contact form is visible
    const targets = [
      document.querySelector('footer'),
      document.querySelector('.contact-grid'),
      document.querySelector('.submit-btn'),
    ].filter(Boolean) as Element[]

    if (targets.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting)
        setHidden(anyVisible)
      },
      { threshold: 0.1 }
    )

    targets.forEach((t) => observerRef.current?.observe(t))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <a
      href={`tel:${PHONE}`}
      className={`sticky-phone${hidden ? ' hidden' : ''}`}
      aria-label={`Call JW Plumbing: ${PHONE_DISPLAY}`}
    >
      <span className="pulse" />
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" />
      </svg>
      <span className="label">{PHONE_DISPLAY}</span>
    </a>
  )
}
