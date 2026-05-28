import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ParticleField from "./components/ParticleField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mukesh-portfolio.vercel.app"),
  title: {
    default: "Mukesh Sendhilkumar · AI Engineer, Algo Trader, Systems Builder",
    template: "%s · Mukesh Sendhilkumar",
  },
  description:
    "Building systems that think, trade, and optimize. Projects in AI, algorithmic trading, and optimization by Mukesh Sendhilkumar.",
  openGraph: {
    title: "Mukesh Sendhilkumar",
    description: "Building systems that think, trade, and optimize.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-[100dvh] bg-background text-foreground antialiased flex flex-col">
        <ParticleField />
        {/* depth vignette */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(34,224,255,0.06), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(52,255,176,0.04), transparent 60%)",
          }}
        />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <footer className="border-t border-zinc-800/60 mt-auto relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 glow-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              <span className="text-zinc-500">
                <span className="text-accent">&lt;/&gt;</span> dev.lab · Mukesh Sendhilkumar
              </span>
            </div>
            <div className="flex items-center gap-5 font-mono text-xs">
              <a
                href="https://github.com/Mukesh590"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:mukesen0204@gmail.com"
                className="text-zinc-500 hover:text-accent transition-colors"
              >
                Email
              </a>
              <span className="text-zinc-700">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
