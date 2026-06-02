'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  className?: string
}

export default function LightboxImage({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className={className} onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 50vw, 33vw" />
      </div>
      {open && (
        <div className="lightbox open" onClick={() => setOpen(false)}>
          <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="lightbox-img" style={{ width: 'auto', height: 'auto' }} />
        </div>
      )}
    </>
  )
}
