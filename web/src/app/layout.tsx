import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stock Signals",
  description:
    "A transparent, backtested stock scanner for Indian markets: intraday, swing and long-term setups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
