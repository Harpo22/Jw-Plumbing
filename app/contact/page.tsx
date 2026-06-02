import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact JW Plumbing | Get a Free Quote',
  description:
    'Contact JW Plumbing for a free, no-obligation quote. Bathroom renovations, boiler services and emergency plumbing across Belfast and Northern Ireland. Call 07932 721615.',
  alternates: { canonical: 'https://jwplumbing.co.uk/contact' },
  openGraph: {
    title: 'Contact JW Plumbing | Get a Free Quote',
    description: 'Get a free, no-obligation quote. Call Jordan directly on 07932 721615 or send an enquiry.',
  },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-label">Get in Touch</div>
          <h1>Contact<br /><em>JW Plumbing</em></h1>
          <p>Call Jordan directly, fill in the enquiry form, or email us. We aim to respond to all enquiries the same day.</p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="contact-grid">
            {/* FORM */}
            <ContactForm />

            {/* CONTACT INFO */}
            <div>
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" />
                    </svg>
                  </div>
                  <div className="contact-detail-text">
                    <strong>Phone</strong>
                    <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-detail-text">
                    <strong>Email</strong>
                    <a href="mailto:jwplumbing01@icloud.com">jwplumbing01@icloud.com</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-detail-text">
                    <strong>Emergency Hours</strong>
                    <span>24/7 — Call Anytime</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-detail-text">
                    <strong>Areas Covered</strong>
                    <span>Belfast, Newtownabbey, Ballyclare,<br />Carrickfergus, Larne, Antrim</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--red)', borderRadius: 'var(--radius-lg)', padding: 28, marginTop: 20, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>🚨 Plumbing Emergency?</div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Don&apos;t Wait — Call Now</div>
                <a
                  href={`tel:${PHONE}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--red)', fontWeight: 700, fontSize: 18, padding: '12px 24px', borderRadius: 'var(--radius)', textDecoration: 'none', marginTop: 4 }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" /></svg>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
