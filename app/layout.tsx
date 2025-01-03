import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";

import { Providers } from "./providers";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { ReactQueryProvider } from "@/providers/reactQueryProvider";
ReactQueryProvider
const openSans = Open_Sans({ subsets: ["hebrew"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="he">
      <head />
      <body
        className={clsx(
          `bg-background ${openSans.className} antialiased`,
          fontSans.variable,
        )}
      >
        <ReactQueryProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="flex min-h-svh flex-col justify-between">
              <Navbar />
              <main className="my-auto">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
