import Link from 'next/link'

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">JW <span>Plumbing</span></div>
            <p className="footer-about">
              Belfast&apos;s trusted bathroom, boiler and plumbing specialists. Family run, Gas Safe registered,
              and fully insured. Over 1,000 jobs completed across Belfast, Newtownabbey, Ballyclare,
              Carrickfergus, Larne and Antrim.
            </p>
            <div className="footer-contact">
              <a href={`tel:${PHONE}`}>📞 {PHONE_DISPLAY}</a>
              <a href="mailto:jwplumbing01@icloud.com">✉ jwplumbing01@icloud.com</a>
              <span style={{ display: 'block', color: 'var(--gray-200)', fontSize: 14, marginBottom: 8 }}>🕐 24/7 Emergency Callouts</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/bathroom-renovations">Bathroom Renovations</Link>
            <Link href="/boiler-services">Boiler Installations</Link>
            <Link href="/boiler-services">Boiler Replacements</Link>
            <Link href="/boiler-services">Boiler Repairs</Link>
            <Link href="/boiler-services">Boiler Servicing</Link>
            <Link href="/emergency-plumbing">Emergency Plumbing</Link>
          </div>

          <div className="footer-col">
            <h4>Areas</h4>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Belfast</span>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Newtownabbey</span>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Ballyclare</span>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Carrickfergus</span>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Larne</span>
            <span style={{ display: 'block', color: 'var(--gray-400)', fontSize: 14, marginBottom: 8 }}>Antrim</span>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/emergency-plumbing">Emergency</Link>
            <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
            <a href="mailto:jwplumbing01@icloud.com">jwplumbing01@icloud.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} JW Plumbing. All rights reserved. Gas Safe Registered.</p>
          <div className="footer-badges">
            <span className="footer-badge">Gas Safe</span>
            <span className="footer-badge">Fully Insured</span>
            <span className="footer-badge">Family Run</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
