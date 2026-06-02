import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LightboxImage from '@/components/Lightbox'

export const metadata: Metadata = {
  title: 'Bathroom Renovations Belfast | Premium Bathroom Fitters',
  description:
    'Expert bathroom renovations across Belfast and Northern Ireland. Full strip-outs, luxury finishes, tiling, plumbing and more. Free quotes. Gas Safe registered. JW Plumbing.',
  alternates: { canonical: 'https://jwplumbing.co.uk/bathroom-renovations' },
  openGraph: {
    title: 'Bathroom Renovations Belfast | JW Plumbing',
    description: 'Expert bathroom renovations across Belfast and Northern Ireland. Free quotes available.',
    images: [{ url: '/images/after-bathroom-full.png', width: 1200, height: 630, alt: 'Completed bathroom renovation Belfast' }],
  },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

const bathroomServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathroom Renovations Belfast',
  description: 'Full bathroom renovation service across Belfast and Northern Ireland. Strip-outs, tiling, plumbing, fixtures and finishes.',
  provider: {
    '@type': 'Plumber',
    name: 'JW Plumbing',
    telephone: '+447932721615',
  },
  areaServed: ['Belfast', 'Newtownabbey', 'Ballyclare', 'Carrickfergus', 'Larne', 'Antrim'],
  serviceType: 'Bathroom Renovation',
}

export default function BathroomRenovationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bathroomServiceSchema) }}
      />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-label">Bathroom Renovations Belfast</div>
          <h1><em>Premium</em> Bathroom<br />Renovations</h1>
          <p>From full strip-outs to luxury finishes. We transform outdated bathrooms into spaces you&apos;ll love — on time, on budget, and built to last.</p>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="bathroom-hero-img">
        <Image src="/images/after-bathroom-full.png" alt="Completed marble bathroom renovation Belfast" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        <div className="bathroom-hero-text">
          <h2>Completed Marble Bathroom — Belfast</h2>
          <p>Full renovation: strip out, re-plumb, tiling, vanity unit, black fixtures and heated towel rail.</p>
        </div>
      </div>

      {/* GALLERY */}
      <section>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Completed <em>Projects</em></h2>
            <p className="section-sub">Real bathrooms, real transformations. Every project is completed to the same high standard regardless of size.</p>
          </div>
          <div className="gallery-grid">
            <LightboxImage className="gallery-item tall" src="/images/after-bathroom-full.png" alt="Full luxury bathroom renovation" />
            <LightboxImage className="gallery-item" src="/images/after-bathroom-shower.png" alt="Walk-in shower renovation" />
            <LightboxImage className="gallery-item" src="/images/after-bathroom-wc.png" alt="WC and bathroom renovation" />
            <LightboxImage className="gallery-item" src="/images/after-bathroom-ceiling.png" alt="Bathroom ceiling and tiling" />
            <LightboxImage className="gallery-item" src="/images/before-bathroom-2.png" alt="Bathroom project Belfast" />
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label" style={{ color: 'var(--red)' }}>Transformations</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Before &amp; <em>After</em></h2>
            <p className="section-sub" style={{ color: 'var(--gray-200)' }}>These before images show the condition of bathrooms we&apos;ve stripped and completely rebuilt. The difference is remarkable.</p>
          </div>
          <div className="ba-container" style={{ maxHeight: 'none' }}>
            <div className="ba-panel" style={{ minHeight: 400 }}>
              <div className="ba-label">Before</div>
              <Image src="/images/before-bathroom-2.png" alt="Bathroom before renovation" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
            <div className="ba-panel" style={{ minHeight: 400 }}>
              <div className="ba-label after">After</div>
              <Image src="/images/after-bathroom-ceiling.png" alt="Bathroom after renovation" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* RENOVATION PROCESS */}
      <section>
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Our Renovation <em>Process</em></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>From first call to finished bathroom — here&apos;s exactly what to expect when you work with JW Plumbing.</p>
          </div>
          <div className="process-steps">
            {[
              { n: 1, title: 'Free Consultation', desc: 'We visit your home, listen to what you want, and assess the space properly.' },
              { n: 2, title: 'Clear Quote', desc: 'You receive a detailed, written quote. No surprises, no hidden extras.' },
              { n: 3, title: 'Strip Out', desc: 'Old bathroom fully removed. New pipework laid to exactly where it needs to be.' },
              { n: 4, title: 'Installation', desc: 'Tiling, sanitary ware, fixtures and fittings installed to a professional standard.' },
              { n: 5, title: 'Final Finish', desc: 'Full clean, quality check, and handover. Your new bathroom, ready to enjoy.' },
            ].map((s) => (
              <div className="proc-step" key={s.n}>
                <div className="proc-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Transform Your<br />Bathroom</h2>
          <p>Free consultation, honest quote, exceptional results. Call Jordan today.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE}`} className="btn-white">Call: {PHONE_DISPLAY}</a>
            <Link href="/contact" className="btn-outline-white">Request Free Quote</Link>
          </div>
        </div>
      </div>
    </>
  )
}
