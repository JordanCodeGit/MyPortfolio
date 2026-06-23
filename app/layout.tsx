import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan Angkawijaya — Junior PM · AI / NLP / Computer Vision",
  description:
    "Jordan Angkawijaya is a Computer Science student and junior Project Manager who ships AI products — from VLM digital ledgers to NLP cognitive-training platforms.",
};

// Before paint: set the theme (no flash) and flag entrance animations on — but
// only when reduced-motion is NOT requested, so reduced users get the final state
// instantly with no flash of hidden content.
const themeScript = `(function(){try{var e=document.documentElement;var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)e.classList.add('dark');if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)e.setAttribute('data-anim','on');}catch(err){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fragmentMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
