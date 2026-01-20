import type { Metadata } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  weight: ["400", "700"],
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
          libreBaskerville.variable,
          "antialiased bg-background text-foreground min-h-screen font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
