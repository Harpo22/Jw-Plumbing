'use client'

import { useState } from 'react'

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 12 }}>
          Enquiry Sent!
        </h3>
        <p style={{ fontSize: 16, color: 'var(--gray-600)', marginBottom: 24 }}>
          Thank you for your enquiry! Jordan will be in touch shortly.
        </p>
        <p style={{ fontSize: 15, color: 'var(--gray-600)' }}>
          For urgent matters, please call directly:{' '}
          <a href={`tel:${PHONE}`} style={{ color: 'var(--red)', fontWeight: 700 }}>{PHONE_DISPLAY}</a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 24 }}>
        Send an <em style={{ color: 'var(--red)', fontStyle: 'normal' }}>Enquiry</em>
      </h3>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Your phone number"
          autoComplete="tel"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Required</label>
        <select id="service" name="service" autoComplete="off" required>
          <option value="">Select a service</option>
          <option value="bathroom-renovation">Bathroom Renovation</option>
          <option value="boiler-installation">Boiler Installation</option>
          <option value="boiler-replacement">Boiler Replacement</option>
          <option value="boiler-repair">Boiler Repair</option>
          <option value="boiler-servicing">Boiler Servicing</option>
          <option value="emergency-plumbing">Emergency Plumbing</option>
          <option value="general-plumbing">General Plumbing</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Project</label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe what you need — as much or as little detail as you have at this stage."
          autoComplete="off"
        />
      </div>

      <button type="submit" className="submit-btn">Send Enquiry →</button>
      <p style={{ fontSize: 13, color: 'var(--gray-400)', marginTop: 12, textAlign: 'center' }}>
        We aim to respond to all enquiries within 2 hours during business hours.
      </p>
    </form>
  )
}
