import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: 'swap',
});

const plexSans = IBM_Plex_Sans({
    variable: "--font-plex-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: 'swap',
});

const baseUrl = "https://lexos-stagging.vercel.app/";

export const metadata: Metadata = {
    metadataBase: new URL(`${baseUrl}`),
    keywords: [
        "AI inventory management",
        "Volumetric inventory",
        "Moving company software",
        "Junk removal software",
        "Logistics inventory",
        "Photo to inventory",
        "Automated inventory",
        "Inventory optimization",
        "Lexos"
    ],
    title: "Lexos – AI-Powered Visual Inventory Management",
    description: "Lexos uses AI to transform photos into accurate, volumetric inventories for moving companies, junk removers, and logistics. Streamline estimates, packing, and operations.",
    openGraph: {
        title: "Lexos – AI-Powered Visual Inventory Management",
        siteName: "Lexos",
        description: "Lexos uses AI to transform photos into accurate, volumetric inventories for moving companies, junk removers, and logistics. Streamline estimates, packing, and operations.",
        images: ["/assets/thumbnail.png"],
        url: `${baseUrl}`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Lexos – AI-Powered Visual Inventory Management",
        description: "Lexos uses AI to transform photos into accurate, volumetric inventories for moving companies, junk removers, and logistics. Streamline estimates, packing, and operations.",
        images: ["/assets/thumbnail.png"],
        creator: "@lexosmove",
    },
    icons: "/favicon.ico",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} className={` scroll-smooth ${manrope.variable} ${plexSans.variable}`}>
            <body className="antialiased font-plex-sans select-none">
                <NextIntlClientProvider messages={messages}>
                    <Navigation />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}