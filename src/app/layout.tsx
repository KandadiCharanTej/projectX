import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeadScorpio — B2B Lead Generation & Outbound Sales",
  description: "LeadScorpio helps B2B companies build predictable outbound pipelines through targeted LinkedIn outreach, cold email, and cold calling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[var(--color-brand-copper)]/30">
        {children}
      </body>
    </html>
  );
}
