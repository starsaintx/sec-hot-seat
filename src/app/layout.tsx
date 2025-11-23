// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEC Coach Hot Seat Tracker",
  description: "Live snapshot of SEC coaching hot seats and buyouts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-root">
        <header className="app-header">
          <div className="app-header-inner">
            <h1>SEC Coach Hot Seat + Buyout Tracker</h1>
            <p className="app-tagline">
              Who&apos;s safe, who&apos;s sizzling, and how much it costs to
              make a change.
            </p>
          </div>
        </header>
        <main className="app-main">{children}</main>
        <footer className="app-footer">
          <p>Built as a fan project. Not affiliated with the SEC or any school.</p>
        </footer>
      </body>
    </html>
  );
}
