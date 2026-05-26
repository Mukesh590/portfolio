import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "dev.lab — Portfolio",
  description: "High school student interested in AI, engineering, and optimization systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <footer className="border-t border-zinc-800/60 py-6 mt-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <span className="text-zinc-600 font-mono text-xs">
              <span className="text-accent">&lt;/&gt;</span> dev.lab
            </span>
            <span className="text-zinc-700 font-mono text-xs">
              built with Next.js &middot; Tailwind CSS
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
