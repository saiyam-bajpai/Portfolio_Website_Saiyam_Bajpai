import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: 'Saiyam Bajpai — CS & Data Science Student | Builder',
  description: 'Saiyam Bajpai — Dual-degree student at IIT Madras and MITS Gwalior building AI-first products. Exploring computer vision, data science, full-stack development, and research. Portfolio of real projects.',
  keywords: [
    'Saiyam Bajpai', 'Saiyam Bajpai portfolio', 'Saiyam Bajpai IIT Madras',
    'Saiyam Bajpai MITS Gwalior', 'Saiyam Bajpai developer', 'saiyambajpai.dev',
    'CS student portfolio India', 'IIT Madras data science student',
    'gesture control AI project', 'GestureFlow MediaPipe', 'student developer India',
    'Python developer student', 'computer vision student project'
  ],
  authors: [{ name: 'Saiyam Bajpai', url: 'https://linkedin.com/in/saiyam-bajpai' }],
  creator: 'Saiyam Bajpai',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Saiyam Bajpai — Builder. Student. Explorer.',
    description: 'CS + Data Science dual-degree student building real AI-first products. IIT Madras | MITS Gwalior.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Saiyam Bajpai Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saiyam Bajpai — Builder. Student. Explorer.',
    description: 'CS + Data Science student building AI-first products.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' }
  },
  alternates: { canonical: 'https://saiyambajpai.dev' },
};

export const viewport: Viewport = {
  themeColor: "#08080F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saiyam Bajpai",
    "url": "https://saiyambajpai.dev",
    "sameAs": [
      "https://linkedin.com/in/saiyam-bajpai",
      "https://github.com/saiyam-bajpai"
    ],
    "jobTitle": "CS & Data Science Student",
    "affiliation": ["IIT Madras", "MITS Gwalior"],
    "description": "Builder-first CS undergrad exploring AI, computer vision, and data science"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
