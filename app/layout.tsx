import type { Metadata } from "next";
import { Inter } from "next/font/google";
<<<<<<< HEAD
=======
import {Analytics} from "@vercel/analytics/react"
>>>>>>> 11f45acb383cb313b8e2faef3a1173cefbf541df

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signodes club , NIET",
  description: "Landing page of signodes club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="#" sizes="any" />
      </head>
      <body className="bg-black-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
<<<<<<< HEAD
=======
          <Analytics/>
>>>>>>> 11f45acb383cb313b8e2faef3a1173cefbf541df
        </ThemeProvider>
      </body>
    </html>
  );
}
