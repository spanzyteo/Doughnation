import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { poppins } from "./styles/fonts";
import ClientProvider from "./components/ClientProvider";


export const metadata: Metadata = {
  title: "Doughnation",
  description: "A platform for donating to build projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
