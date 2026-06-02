import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: "JW Plumbing | Belfast's Trusted Bathroom, Boiler & Plumbing Specialists",
  description:
    "JW Plumbing – Belfast's trusted bathroom renovation, boiler installation and emergency plumbing specialists. Gas Safe registered. Serving Belfast, Newtownabbey, Ballyclare, Carrickfergus, Larne and Antrim.",
  alternates: { canonical: 'https://jwplumbing.co.uk' },
}

const PHONE = '07932721615'
const PHONE_DISPLAY = '07932 721615'

const faqItems = [
  {
    q: 'Do you provide free quotes?',
    a: "Yes, all quotes for bathroom renovations and boiler work are completely free with no obligation. We'll visit your home, assess the job properly, and give you a clear written quote before any work begins.",
  },
  {
    q: 'Are you Gas Safe registered?',
    a: "Yes, JW Plumbing is fully Gas Safe registered. This is a legal requirement for any work on gas appliances in the UK, and you can verify our registration on the Gas Safe Register website. We take safety seriously on every job.",
  },
  {
    q: 'How long does a bathroom renovation take?',
    a: "Most bathroom renovations take between 5 and 10 working days depending on the scope of work. We'll give you a clear timeline before we start, and keep you updated throughout. We work efficiently without cutting corners.",
  },
  {
    q: 'What areas do you cover?',
    a: "We cover Belfast, Newtownabbey, Ballyclare, Carrickfergus, Larne, and Antrim. Response times vary by area — we can reach Antrim, Ballyclare and Newtownabbey within 10–20 minutes for emergencies, and Belfast, Carrickfergus and Larne within 60 minutes.",
  },
  {
    q: 'Do you supply materials or do I need to source them?',
    a: "We can do it either way. We're happy to supply all materials and fixtures, or we can work with materials you've already purchased. For bathroom renovations, we can advise on the best suppliers and even help you choose products if you'd like guidance.",
  },
  {
    q: 'Do you offer emergency plumbing outside of normal hours?',
    a: "Yes — we offer 24/7 emergency callouts across all our coverage areas. If you have a burst pipe, major leak, or heating failure, call us anytime and we'll get to you as quickly as possible.",
  },
  {
    q: 'Is all your work guaranteed?',
    a: "Absolutely. All our work is fully guaranteed and we're fully insured for public liability and employers' liability. If something isn't right, we'll come back and fix it. That's our promise.",
  },
]

const phoneIcon = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-img">
          <Image src="/images/after-bathroom-full.png" alt="Completed luxury bathroom renovation Belfast" fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            Belfast&apos;s Trusted Specialists
          </div>
          <h1>Bathrooms.<br />Boilers.<br /><em>Done Right.</em></h1>
          <p className="hero-sub">
            Premium bathroom renovations, expert boiler installations, and reliable plumbing across Belfast
            and beyond. Family run. Gas Safe registered. 1,000+ jobs completed.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn-primary">
              {phoneIcon}
              Get a Free Quote
            </Link>
            <Link href="/bathroom-renovations" className="btn-outline">View Our Work</Link>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Gas Safe Registered
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Fully Insured
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Family Business
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              1,000+ Jobs Completed
            </div>
            <div className="hero-trust-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              24/7 Emergency Callouts
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <div className="emergency-banner">
        <div className="emergency-banner-inner">
          <strong>🚨 Plumbing Emergency? We&apos;re Available 24/7</strong>
          <a href={`tel:${PHONE}`}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z" /></svg>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <strong>Gas Safe</strong><span>Registered</span>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            <strong>Fully Insured</strong><span>All Work</span>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <strong>Family Run</strong><span>Business</span>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            <strong>1,000+ Jobs</strong><span>Completed</span>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <strong>Owner Direct</strong><span>You Talk To Jordan</span>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <strong>Fast Response</strong><span>10–60 Mins</span>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">We Understand What<br /><em>Homeowners Actually Need</em></h2>
            <p className="section-sub">No hidden costs. No vague timescales. No not showing up. Just honest, quality work done properly the first time.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
              <h3>You Deal With the Owner</h3>
              <p>When you call JW Plumbing, you speak directly with Jordan — not a call centre, not a receptionist. Direct communication means better results and no getting passed around.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg></div>
              <h3>Honest, Upfront Pricing</h3>
              <p>You&apos;ll know exactly what you&apos;re paying before any work begins. We don&apos;t believe in surprise invoices. What we quote is what you pay — full stop.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3>Proper Qualifications</h3>
              <p>Gas Safe registered and fully insured. Every job, no matter the size, is carried out to the highest professional standard and in full compliance with UK regulations.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <h3>We Actually Turn Up</h3>
              <p>We know how common no-show tradesmen are in Belfast. When JW Plumbing commits to an appointment, we keep it. Your time matters and we treat it accordingly.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <h3>Fast Response Across All Areas</h3>
              <p>From Antrim to Carrickfergus, we cover the full area with rapid response times. Emergencies responded to within 10–60 minutes depending on your location.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></div>
              <h3>Quality Work, Every Time</h3>
              <p>1,000+ completed jobs speaks for itself. We take pride in everything we do — from small repairs to full bathroom renovations — and leave every site clean and tidy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">What We<br /><em>Specialise In</em></h2>
          </div>
          <div className="services-grid">
            <Link href="/bathroom-renovations" className="service-card">
              <div className="service-card-img">
                <Image src="/images/after-bathroom-shower.png" alt="Bathroom renovation Belfast" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 33vw" />
              </div>
              <div className="service-card-content">
                <div className="tag">Most Popular</div>
                <h3>Bathroom Renovations</h3>
                <p>Complete bathroom transformations — from full strip-out to luxury finishes. We handle every detail.</p>
              </div>
            </Link>
            <Link href="/boiler-services" className="service-card">
              <div className="service-card-img">
                <Image src="/images/boiler-new.png" alt="Boiler installation Belfast" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 33vw" />
              </div>
              <div className="service-card-content">
                <div className="tag">Gas Safe Registered</div>
                <h3>Boiler Services</h3>
                <p>Installations, replacements, repairs and servicing. Expert boiler work you can rely on.</p>
              </div>
            </Link>
            <Link href="/emergency-plumbing" className="service-card">
              <div className="service-card-img">
                <Image src="/images/boiler-install-1.png" alt="Emergency plumber Belfast" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 33vw" />
              </div>
              <div className="service-card-content">
                <div className="tag">24/7 Available</div>
                <h3>Emergency Plumbing</h3>
                <p>Burst pipes, leaks, no heating. Available around the clock when you need us most.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="ba-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Transformations</div>
            <h2 className="section-title">Before &amp; <em>After</em></h2>
            <p className="section-sub">See what JW Plumbing can do. These are real homes we&apos;ve transformed across Belfast and the surrounding areas.</p>
          </div>
          <div className="ba-container">
            <div className="ba-panel" style={{ height: 500 }}>
              <div className="ba-label">Before</div>
              <Image src="/images/before-bathroom-1.png" alt="Before bathroom renovation Belfast" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
            <div className="ba-panel" style={{ height: 500 }}>
              <div className="ba-label after">After</div>
              <Image src="/images/after-bathroom-full.png" alt="After bathroom renovation Belfast" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/bathroom-renovations" className="btn-primary">See All Our Bathroom Work →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Customer Reviews</div>
            <h2 className="section-title">What Our <em>Customers Say</em></h2>
          </div>
          <div className="reviews-grid">
            {[
              { text: '"Jordan completely transformed our bathroom. The quality of work is outstanding — marble tiles, black fixtures, the lot. He was on time every day, kept us informed throughout, and left the place spotless. Couldn\'t recommend him more highly."', author: 'Sarah M.', area: 'Newtownabbey' },
              { text: '"Old oil boiler was on its last legs. Jordan came out the same day, assessed everything, gave us a fair quote and had the new boiler installed within two days. Heating and hot water back on with no fuss. Brilliant service."', author: 'Paul D.', area: 'Ballyclare' },
              { text: '"Had a burst pipe on a Sunday evening — absolute nightmare. Called JW Plumbing and Jordan was at the door within 20 minutes. Fixed quickly, professionally, and didn\'t charge the earth. Will be using him for our bathroom renovation next year."', author: 'Christine K.', area: 'Antrim' },
              { text: '"Finally found a plumber in Belfast who does what he says he\'ll do. Turned up on time, did quality work, and explained everything along the way. Our new bathroom is absolutely stunning. Worth every penny."', author: 'Mark T.', area: 'Belfast' },
              { text: '"Jordan fitted our new bathroom from scratch. Planning, tiling, plumbing — he handled it all. The attention to detail was impressive. The bathroom looks like something out of a showroom. Extremely happy with the result."', author: 'Fiona R.', area: 'Carrickfergus' },
              { text: '"Boiler serviced and a few small plumbing jobs done in one visit. Jordan was professional, tidy and great value. He spotted an issue we hadn\'t noticed and fixed it on the spot. Exactly the kind of tradesman you want to find and keep."', author: 'Alan W.', area: 'Larne' },
            ].map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">{r.author}</div>
                <div className="review-area">{r.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS COVERED */}
      <section className="areas-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-label">Coverage</div>
            <h2 className="section-title">Areas We <em>Cover</em></h2>
            <p className="section-sub" style={{ color: 'var(--gray-200)' }}>Fast response times across Belfast, Newtownabbey and the wider Antrim area.</p>
          </div>
          <div className="areas-grid">
            {[
              { name: 'Antrim', time: '10–20 Mins', detail: 'Our Local Base' },
              { name: 'Ballyclare', time: '10–20 Mins', detail: 'Fast Response' },
              { name: 'Newtownabbey', time: '10–20 Mins', detail: 'Fast Response' },
              { name: 'Belfast', time: 'Within 60 Mins', detail: 'City Coverage' },
              { name: 'Carrickfergus', time: 'Within 60 Mins', detail: 'Coastal Coverage' },
              { name: 'Larne', time: 'Within 60 Mins', detail: 'North Antrim' },
            ].map((a) => (
              <div className="area-card" key={a.name}>
                <h3>{a.name}</h3>
                <div className="response">{a.time}</div>
                <div className="response-detail">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Common <em>Questions</em></h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Ready to Get<br />Your Quote?</h2>
          <p>Talk to Jordan directly. No call centres, no runaround — just honest advice and a fair price.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE}`} className="btn-white">
              {phoneIcon}
              Call: {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-outline-white">Send an Enquiry</Link>
          </div>
        </div>
      </div>
    </>
  )
}
