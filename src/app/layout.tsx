import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://galaxysystem.in"),
  title: {
    default: "Galaxy System | Adaptive Driving Controls & Mobility Solutions Bengaluru",
    template: "%s | Galaxy System Bengaluru",
  },
  description:
    "RTO-certified adaptive vehicle modifications in Bengaluru. Custom push-pull hand controls, electronic auto-clutches, left-foot accelerators, & prosthetic limbs engineered for physically challenged drivers across India.",
  keywords: [
    "adaptive driving controls India",
    "hand controls for car Bengaluru",
    "electronic auto clutch system",
    "left foot accelerator modification",
    "handicapped car modification Rajajinagar",
    "Divyang vehicle modification Karnataka",
    "RTO approved car modification for disabled",
    "prosthetic limbs center Bengaluru",
    "Dr Shiva Prasad Y B Galaxy System",
  ],
  authors: [{ name: "Dr. Shiva Prasad Y B", url: "https://galaxysystem.in/about" }],
  creator: "Galaxy System",
  publisher: "Galaxy System",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://galaxysystem.in",
    siteName: "Galaxy System Adaptive Mobility",
    title: "Galaxy System | Adaptive Driving Controls & Mobility Solutions",
    description:
      "RTO-approved adaptive driving controls, electronic clutch systems, left-foot accelerators, and custom prosthetic limbs in Bengaluru.",
    images: [
      {
        url: "https://galaxysystem.in/assets/hero-main-user.jpg",
        width: 1200,
        height: 630,
        alt: "Galaxy System Adaptive Vehicle Modification & Controls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy System | Adaptive Driving & Mobility Solutions",
    description:
      "Custom RTO-certified vehicle modifications and prosthetic solutions for physically challenged drivers in India.",
    images: ["https://galaxysystem.in/assets/hero-main-user.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://galaxysystem.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutomotiveBusiness", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://galaxysystem.in/#organization",
      name: "Galaxy System",
      alternateName: "Galaxy System Adaptive Mobility Solutions",
      url: "https://galaxysystem.in",
      logo: "https://galaxysystem.in/galaxy_system_logo.svg",
      image: "https://galaxysystem.in/assets/hero-main-user.jpg",
      description:
        "Bengaluru's trusted specialist in custom adaptive driving modifications (hand controls, electronic clutch, left-foot accelerator) and prosthetic limbs for physically challenged individuals.",
      telephone: "+919845056726",
      email: "info@galaxysystem.in",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Shankar Mutt, Nagapura, Rajajinagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560010",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9982,
        longitude: 77.553,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "19:00",
        },
      ],
      founder: {
        "@type": "Person",
        name: "Dr. Shiva Prasad Y B",
        jobTitle: "Founder & Lead Adaptive Mobility Engineer",
        description: "Karma Veera Puraskara Honoree, Kivi Italy Trained Specialist, Polio Survivor",
      },
      areaServed: [
        { "@type": "State", name: "Karnataka" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Adaptive Mobility Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hand-Operated Driving Controls",
              description: "Custom push-pull mechanical controls for throttle and braking.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electronic Auto-Clutch System",
              description: "Microprocessor clutch automation for manual cars in city traffic.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Left-Foot Accelerator Setup",
              description: "Quick-release pedal transfer unit with safety guard block.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prosthetic & Orthotic Limbs",
              description: "Endoskeletal leg prostheses, carbon-fiber calipers, and spinal bracing.",
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-mist text-navy antialiased selection:bg-sky selection:text-white pt-[68px] lg:pt-[74px]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
