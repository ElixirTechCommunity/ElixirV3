import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

const ClientWrapperLayout = dynamic(
  () => import("@/layouts/ClientWrapperLayout/ClientWrapperLayout"),
  {
    ssr: true,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Elixir Tech Community`,
    default: "Elixir Tech Community",
  },
  description:
    "Elixir fosters a collaborative tech community dedicated to comprehensive learning, offering a supportive environment for growth and innovation.",
  metadataBase: new URL("https://www.elixircommunity.in/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/public/jsm-logo.webp" sizes="any" />
        <meta property="og:title" content="Elixir Tech Community" />
        <meta
          property="og:description"
          content="Elixir fosters a collaborative tech community dedicated to comprehensive learning, offering a supportive environment for growth and innovation."
        />
        <meta property="og:image" content="/public/HomeScreen.webp" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <ClientWrapperLayout>{children}</ClientWrapperLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
