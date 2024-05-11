import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from '../app/Providers'
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from 'react';
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "IMDb - Clone",
  description: "This is a movie database clone",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <Suspense>
            <SearchBox />
          </Suspense>

          {children}
        </Providers>
      </body>

    </html>
  );
}
