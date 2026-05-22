import { Bowlby_One, Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";


const bowlbyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#F4EBD7",
};

export const metadata = {
  title: "Cockroach Janta Party Mirzapur — Voice of the Lazy & Unemployed",
  description: "The official Mirzapur district wing of the Cockroach Janta Party (CJP-M). Fighting for the lazy, the unemployed, and the disgruntled. Join the swarm or file a complaint!",
  keywords: ["Cockroach Janta Party", "CJP Mirzapur", "Mirzapur Satire", "Unemployed Youth", "Purvanchal Politics Satire"],
  authors: [{ name: "Swarm HQ" }],
  openGraph: {
    title: "Cockroach Janta Party Mirzapur — Voice of the Lazy & Unemployed",
    description: "The official Mirzapur district wing of the Cockroach Janta Party. No corporate sponsors, infinity patience, and infinite demands.",
    url: "https://cockroachjantaparty.org",
    siteName: "Cockroach Janta Party Mirzapur",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cockroach Janta Party Mirzapur",
    description: "Voice of the Lazy & Unemployed in Mirzapur District.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bowlbyOne.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="body-noise">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
