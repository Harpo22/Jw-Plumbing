import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emergency Plumber Belfast | 24/7 Fast Response',
  description:
    '24/7 emergency plumber in Belfast. Burst pipes, flooding, no heating, gas leaks. Fast response across Antrim, Newtownabbey, Ballyclare and beyond. Call now: 07932 721615.',
  alternates: { canonical: 'https://jwplumbing.co.uk/emergency-plumbing' },
  openGraph: {
    title: '24/7 Emergency Plumber Belfast | JW Plumbing',
    description: '24/7 emergency plumber in Belfast. Burst pipes, no heating, flooding — fast response guaranteed. Call now.',
  },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

const emergencyServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '24/7 Emergency Plumbing Belfast',
  description: '24/7 emergency plumbing service across Belfast and Northern Ireland. Burst pipes, flooding, no heating and gas leaks.',
  provider: {
    '@type': 'Plumber',
    name: 'JW Plumbing',
    telephone: '+447932721615',
  },
  areaServed: ['Belfast', 'Newtownabbey', 'Ballyclare', 'Carrickfergus', 'Larne', 'Antrim'],
  serviceType: 'Emergency Plumbing',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

const phoneIcon = (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" />
  </svg>
)

export default function EmergencyPlumbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }}
      />

      {/* EMERGENCY HERO */}
      <div className="emergency-hero">
        <div className="section-inner">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>24/7 Emergency Plumbing</div>
          <h1>Emergency<br /><em>Plumber</em><br />Belfast</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 560, marginBottom: 32 }}>
            Burst pipes, flooding, no heating. We respond fast — 24 hours a day, 7 days a week across Belfast and all surrounding areas.
          </p>
          <a href={`tel:${PHONE}`} className="btn-primary" style={{ fontSize: 20, padding: '18px 36px' }}>
            {phoneIcon}
            Call Now: {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* EMERGENCIES WE HANDLE */}
      <section>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">We Handle All Emergencies</div>
            <h2 className="section-title">Common Plumbing <em>Emergencies</em></h2>
          </div>
          <div className="emergency-issues">
            {[
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6m0 4h.01" /></svg>,
                title: 'Burst Pipes', desc: 'Turn off your stopcock and call immediately. We\'ll be with you fast.',
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>,
                title: 'Major Leaks', desc: 'Water escaping from joints, fittings or pipework — stopped quickly before damage spreads.',
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                title: 'No Heating or Hot Water', desc: 'Boiler failure leaving you cold. We\'ll diagnose and resolve it as quickly as possible.',
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>,
                title: 'Flooding', desc: 'Water coming through ceilings or floors. Emergency containment and repair.',
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>,
                title: 'Blocked Drains', desc: 'Sinks, toilets or showers backing up. We clear blockages properly.',
              },
              {
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
                title: 'Gas Leaks', desc: 'If you smell gas — leave the property and call us. We\'re Gas Safe registered.',
              },
            ].map((issue) => (
              <div className="issue-card" key={issue.title}>
                <div className="issue-icon">{issue.icon}</div>
                <div>
                  <h4>{issue.title}</h4>
                  <p>{issue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSE TIMES */}
      <section style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Response Times</div>
            <h2 className="section-title">How Quickly We&apos;ll <em>Reach You</em></h2>
          </div>
          <table className="response-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Emergency Response Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Antrim', '10–20 Minutes'],
                ['Ballyclare', '10–20 Minutes'],
                ['Newtownabbey', '10–20 Minutes'],
                ['Belfast', 'Within 60 Minutes'],
                ['Carrickfergus', 'Within 60 Minutes'],
                ['Larne', 'Within 60 Minutes'],
              ].map(([area, time]) => (
                <tr key={area}>
                  <td>{area}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Emergency?<br />Call Right Now</h2>
          <p>Don&apos;t wait — call Jordan directly. Available 24/7 for emergency callouts across all areas.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE}`} className="btn-white" style={{ fontSize: 20, padding: '18px 36px' }}>
              Call: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
