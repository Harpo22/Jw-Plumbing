import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyPhone from '@/components/StickyPhone'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jwplumbing.co.uk'),
  title: {
    default: "JW Plumbing | Belfast's Trusted Bathroom, Boiler & Plumbing Specialists",
    template: '%s | JW Plumbing Belfast',
  },
  description:
    "JW Plumbing – Belfast's trusted bathroom renovation, boiler installation and emergency plumbing specialists. Gas Safe registered. Serving Belfast, Newtownabbey, Ballyclare, Carrickfergus, Larne and Antrim.",
  keywords: [
    'plumber Belfast',
    'emergency plumber Belfast',
    'bathroom renovations Belfast',
    'bathroom fitters Belfast',
    'boiler installations Belfast',
    'boiler replacements Belfast',
    'boiler repairs Belfast',
    'plumber Ballyclare',
    'plumber Newtownabbey',
    'plumber Carrickfergus',
    'plumber Larne',
    'plumber Antrim',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'JW Plumbing',
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'JW Plumbing',
  description:
    "Belfast's trusted bathroom renovation, boiler installation and emergency plumbing specialists. Gas Safe registered.",
  url: 'https://jwplumbing.co.uk',
  telephone: '+447932721615',
  email: 'jwplumbing01@icloud.com',
  image: 'https://jwplumbing.co.uk/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belfast',
    addressRegion: 'Northern Ireland',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.5973,
    longitude: -5.9301,
  },
  areaServed: [
    { '@type': 'City', name: 'Belfast' },
    { '@type': 'City', name: 'Newtownabbey' },
    { '@type': 'City', name: 'Ballyclare' },
    { '@type': 'City', name: 'Carrickfergus' },
    { '@type': 'City', name: 'Larne' },
    { '@type': 'City', name: 'Antrim' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '££',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Renovations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boiler Installations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Plumbing' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <StickyPhone />
      </body>
    </html>
  )
}
