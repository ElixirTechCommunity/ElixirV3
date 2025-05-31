import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

const ServerWrapperLayout = dynamic(
  () => import("@/layouts/WrapperLayout/Server/ServerWrapperLayout"),
  {
    ssr: true,
  }
);

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Toaster />
          <ServerWrapperLayout>{children}</ServerWrapperLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
