'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface Props {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className="faq-item" key={i}>
          <button
            className={`faq-q${openIndex === i ? ' open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {item.q}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className={`faq-a${openIndex === i ? ' open' : ''}`}>{item.a}</div>
        </div>
      ))}
    </div>
  )
}
