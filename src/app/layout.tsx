import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/forms/QuoteProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "WebAstral Infosystems - Best customized IT Solutions",
    template: "%s | WebAstral Infosystems",
  },
  description:
    "Webastral Infosystems delivers website designing and development, app development, and internet marketing with cutting edge technology and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-zinc-900">
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
