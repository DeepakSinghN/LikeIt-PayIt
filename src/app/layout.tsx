import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const newsreader = localFont({
  src: [
    {
      path: "../../public/Newsreader/Newsreader-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
    {
      path: "../../public/Newsreader/Newsreader-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const magnetik = localFont({
  src: [
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/magnetik-font-1792537161-0/Magnetik-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-magnetik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LikeItPayIt — Free 24h Website Demo for Local Businesses",
  description:
    "See your business's new custom homepage before you spend a single rupee. Powered by AI speed, handcrafted by real human designers. Like it? Pay & launch. Don't like it? Move on.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${newsreader.variable} ${magnetik.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('likeitpayit-theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1C1917] dark:bg-[#07090E] dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
