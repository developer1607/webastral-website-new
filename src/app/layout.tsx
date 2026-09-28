import type { Metadata } from "next";
import "./globals.css";
import { QuoteProvider } from "@/components/forms/QuoteProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
