import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Boiler Services Belfast | Installations, Repairs & Servicing',
  description:
    'Gas Safe registered boiler installations, replacements, repairs and servicing across Belfast and Northern Ireland. Fast, reliable boiler engineers. Free quotes. JW Plumbing.',
  alternates: { canonical: 'https://jwplumbing.co.uk/boiler-services' },
  openGraph: {
    title: 'Boiler Services Belfast | JW Plumbing',
    description: 'Gas Safe registered boiler installations, replacements, repairs and servicing. Free quotes available.',
    images: [{ url: '/images/boiler-new.png', width: 1200, height: 630, alt: 'New boiler installation Belfast' }],
  },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

const boilerServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boiler Services Belfast',
  description: 'Gas Safe registered boiler installations, replacements, repairs and servicing across Belfast and Northern Ireland.',
  provider: {
    '@type': 'Plumber',
    name: 'JW Plumbing',
    telephone: '+447932721615',
  },
  areaServed: ['Belfast', 'Newtownabbey', 'Ballyclare', 'Carrickfergus', 'Larne', 'Antrim'],
  serviceType: 'Boiler Installation and Repair',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Boiler Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boiler Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boiler Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boiler Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boiler Servicing' } },
    ],
  },
}

export default function BoilerServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boilerServiceSchema) }}
      />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-label">Boiler Services Belfast</div>
          <h1><em>Expert</em> Boiler<br />Services</h1>
          <p>Gas Safe registered boiler installations, replacements, repairs and servicing across Belfast and the surrounding area. Reliable heating when you need it.</p>
        </div>
      </div>

      {/* BOILER SERVICES GRID */}
      <section>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Boiler <em>Services</em></h2>
          </div>
          <div className="boiler-service-grid">
            {[
              {
                img: '/images/boiler-new.png',
                alt: 'New boiler installation Belfast',
                title: 'Boiler Installations',
                desc: 'Brand new boiler systems installed to the highest standard. We\'ll advise on the right boiler for your property, handle all pipework, and ensure full commissioning before we leave.',
              },
              {
                img: '/images/boiler-old-1.png',
                alt: 'Boiler replacement Belfast',
                title: 'Boiler Replacements',
                desc: 'Old boiler beyond repair? We\'ll remove it cleanly and install a modern, efficient replacement — minimising disruption and getting your heating restored as quickly as possible.',
              },
              {
                img: '/images/boiler-install-2.png',
                alt: 'Boiler repair Belfast',
                title: 'Boiler Repairs',
                desc: 'Boiler losing pressure, not firing, or making strange noises? We diagnose and repair all common boiler faults. Honest assessment — if it\'s fixable, we\'ll fix it. If it\'s not, we\'ll tell you.',
              },
              {
                img: '/images/boiler-old-2.png',
                alt: 'Boiler servicing Belfast',
                title: 'Boiler Servicing',
                desc: 'Annual servicing keeps your boiler running safely and efficiently, extends its lifespan, and is often required to maintain manufacturer warranties. Book your service today.',
              },
            ].map((s) => (
              <div className="boiler-service-card" key={s.title}>
                <div className="boiler-service-img">
                  <Image src={s.img} alt={s.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 25vw" />
                </div>
                <div className="boiler-service-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY TIMELINE */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label" style={{ color: 'var(--red)' }}>Case Study</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Old to New: A Real <em>Boiler Replacement</em></h2>
            <p className="section-sub" style={{ color: 'var(--gray-200)' }}>Here&apos;s a recent boiler replacement project completed for a homeowner in Ballyclare. Old oil boiler removed, modern system installed.</p>
          </div>
          <div className="boiler-timeline">
            {[
              { n: 1, img: '/images/boiler-old-5.png', alt: 'Old boiler system', title: 'Existing System', desc: 'Ageing oil boiler in poor condition — inefficient, unreliable, and increasingly costly to run.' },
              { n: 2, img: '/images/boiler-old-3.png', alt: 'Boiler assessment', title: 'Assessment', desc: 'Full inspection of pipework, controls, and flue. Clear plan drawn up before any work begins.' },
              { n: 3, img: '/images/boiler-install-1.png', alt: 'New boiler installation in progress', title: 'Installation', desc: 'New copper pipework run neatly. New boiler mounted and connected to existing system.' },
              { n: 4, img: '/images/boiler-new.png', alt: 'Completed new boiler', title: 'Completed', desc: 'New modern boiler commissioned and tested. Heating and hot water fully restored.' },
            ].map((s) => (
              <div className="bt-step" key={s.n}>
                <div className="bt-num">{s.n}</div>
                <div className="bt-img">
                  <Image src={s.img} alt={s.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 50vw, 25vw" />
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAS SAFE */}
      <section>
        <div className="section-inner">
          <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <div className="section-label">Safety First</div>
              <h2 className="section-title" style={{ fontSize: 36 }}>Gas Safe<br /><em>Registered</em></h2>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>
                All gas work carried out by JW Plumbing is fully compliant with UK Gas Safety Regulations. It is illegal for anyone
                who is not Gas Safe registered to work on gas appliances. Our registration can be verified at any time via the Gas Safe Register.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Verified Gas Safe registration', 'Full public liability insurance', 'All work certified on completion'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 600, color: 'var(--charcoal)' }}>
                    <svg width="20" height="20" fill="none" stroke="var(--red)" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--red)', width: 160, height: 160, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', flexDirection: 'column', color: '#fff' }}>
                <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, letterSpacing: 1, marginTop: 4 }}>GAS SAFE</div>
              </div>
              <p style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, textTransform: 'uppercase', color: 'var(--charcoal)' }}>Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Need Boiler Work?<br />Call Today</h2>
          <p>Fast, reliable boiler services across Belfast and the surrounding area. Gas Safe registered.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE}`} className="btn-white">Call: {PHONE_DISPLAY}</a>
            <Link href="/contact" className="btn-outline-white">Get a Quote</Link>
          </div>
        </div>
      </div>
    </>
  )
}
