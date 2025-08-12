import "./globals.css";
import {AppContextProvider} from "@/app/appContextProvider";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TypologyDen - Home",
  description: "Where you go to get typed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AppContextProvider>
            {children}
        </AppContextProvider>
        <div style={{ height: "10.7vh" }}></div>
      </body>
    </html>
  );
}
