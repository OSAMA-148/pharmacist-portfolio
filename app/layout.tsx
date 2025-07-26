import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Pharmacist Portfolio",
    description:
        "Portfolio of a clinical pharmacist specializing in precision medicine and AI-assisted healthcare solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
            </head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
