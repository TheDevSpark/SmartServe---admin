import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Belle Vista Admin",
  description: "Smart Restaurant System - Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f8f9]`}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-20 h-14 bg-[var(--brand-800)] text-white shadow-sm">
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand-500)]" />
                <span className="font-semibold tracking-wide">Belle Vista Admin</span>
              </div>
              <nav className="flex items-center gap-4 text-sm">
                <a className="hover:text-[var(--brand-100)]" href="/">Dashboard</a>
                <a className="hover:text-[var(--brand-100)]" href="/orders">Orders</a>
                <a className="hover:text-[var(--brand-100)]" href="/staff-schedule">Staff Schedule</a>
                <a className="hover:text-[var(--brand-100)]" href="/inventory">Inventory</a>
                <a className="hover:text-[var(--brand-100)]" href="/analytics">Analytics</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">{children}</main>
          <footer className="py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Belle Vista</footer>
        </div>
      </body>
    </html>
  );
}
