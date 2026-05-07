import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Digital Garden",
  description: "A personal space for thoughts, identity, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          outfit.variable,
          "antialiased bg-background text-foreground min-h-screen font-sans flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
          <Navbar />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
