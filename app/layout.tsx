import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = { title: "AV / Photographer Growth", description: "A more consistent way for established wedding photographers to be discovered by the couples who value their work.", openGraph: { title: "AV / Photographer Growth", description: "Get your photography in front of more of the right couples.", type: "website" }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>; }
