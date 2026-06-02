import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About JW Plumbing | Family Run Belfast Plumber',
  description:
    'JW Plumbing is Jordan Wilson\'s plumbing and heating business, built on reputation and quality across Belfast and Northern Ireland. Gas Safe registered. Over 1,000 jobs completed.',
  alternates: { canonical: 'https://jwplumbing.co.uk/about' },
  openGraph: {
    title: 'About JW Plumbing | Family Run Belfast Plumber',
    description: 'Family run plumbing and heating business across Belfast. Gas Safe registered. Over 1,000 jobs completed.',
  },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

const checkIcon = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <div className="about-hero">
        <div className="section-inner">
          <div className="section-label" style={{ color: 'var(--red)' }}>About JW Plumbing</div>
          <h1><em>Family Run,</em><br />Properly Done</h1>
          <p>
            JW Plumbing is Jordan Wilson&apos;s plumbing and heating business — built on reputation, repeat customers,
            and a genuine commitment to quality work across Belfast and the surrounding area.
          </p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-num">1,000+</div><div className="stat-label">Jobs Completed</div></div>
            <div className="stat-card"><div className="stat-num">6</div><div className="stat-label">Areas Covered</div></div>
            <div className="stat-card"><div className="stat-num">24/7</div><div className="stat-label">Emergency Cover</div></div>
            <div className="stat-card"><div className="stat-num">100%</div><div className="stat-label">Gas Safe Registered</div></div>
          </div>

          {/* STORY */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 64 }}>
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title" style={{ fontSize: 36 }}>Why Jordan Started<br /><em>JW Plumbing</em></h2>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: 16 }}>
                JW Plumbing was built on a simple idea: do good work, treat people fairly, and communicate honestly. Jordan Wilson has been
                working in plumbing and heating across Belfast and Antrim for years, completing over 1,000 jobs — from emergency callouts at midnight
                to full bathroom renovations that take weeks.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: 16 }}>
                As a family run business, every job matters. Jordan&apos;s reputation is on the line on every project — which means you get the owner&apos;s
                attention and care on every single job, not a subcontracted workforce.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.75 }}>
                If you&apos;ve ever been let down by a tradesman who didn&apos;t show up, gave vague pricing or left a mess behind — Jordan built JW Plumbing
                as the answer to that frustration.
              </p>
            </div>
            <div style={{ background: 'var(--charcoal)', borderRadius: 'var(--radius-lg)', padding: 36 }}>
              <div className="section-label" style={{ color: 'var(--red)' }}>Why Customers Trust Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
                {[
                  { title: 'Direct access to the owner', desc: 'You deal with Jordan from start to finish' },
                  { title: 'No hidden costs', desc: 'Upfront written quotes before any work starts' },
                  { title: 'We actually show up', desc: 'Appointments kept, timescales respected' },
                  { title: 'Fully qualified and insured', desc: 'Gas Safe registered. All work guaranteed.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 36, height: 36, background: 'var(--red)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
                      {checkIcon}
                    </div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: 600, marginBottom: 4 }}>{item.title}</p>
                      <p style={{ color: 'var(--gray-400)', fontSize: 14 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What We Stand <em>For</em></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h4>Reliability</h4>
              <p>We commit to appointments and honour them. No no-shows, no excuses, no last-minute cancellations.</p>
            </div>
            <div className="value-card">
              <h4>Transparency</h4>
              <p>Honest quotes, honest assessments. We&apos;ll tell you if something isn&apos;t worth fixing — even if that means less money for us.</p>
            </div>
            <div className="value-card">
              <h4>Quality</h4>
              <p>Every job is done to the same standard regardless of size. We take pride in our work and it shows in the results.</p>
            </div>
            <div className="value-card">
              <h4>Communication</h4>
              <p>You&apos;ll always know where you stand. We keep customers informed throughout every project from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Get in Touch<br />with Jordan</h2>
          <p>Call directly, send a message, or request a free quote. We&apos;d love to help with your project.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE}`} className="btn-white">Call: {PHONE_DISPLAY}</a>
            <Link href="/contact" className="btn-outline-white">Send an Enquiry</Link>
          </div>
        </div>
      </div>
    </>
  )
}
