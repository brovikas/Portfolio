import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const display = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});


export const metadata = {
  title: `${profile.alias} — ${profile.role}`,
  description: profile.tagline,

  keywords: [
    profile.alias,
    profile.role,
    profile.name,
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "BCA Software Developer"
  ],

  authors: [
    {
      name: profile.name,
    },
  ],

  creator: profile.name,

  openGraph: {
    title: `${profile.alias} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    siteName: `${profile.name}'s Portfolio`,
    images: [
      {
        url: "/favicon.jpg",
        width: 630,
        height: 630,
        alt: `${profile.alias} — ${profile.role}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.alias} — ${profile.role}`,
    description: profile.tagline,
    images: ["/favicon.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink text-blade font-body antialiased">{children}</body>
    </html>
  );
}
