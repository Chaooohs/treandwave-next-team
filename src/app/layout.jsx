import { Montserrat, Mulish } from "next/font/google";
import { Footer, Header } from "@/components/shared";
import localFont from 'next/font/local'
import "./globals.css";
import StoreProvider from "./StoreProvider";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600']
})

const mulish = Mulish({
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['400', '700', '800']
})

const adieu = localFont({
  src: '../fonts/adieu.otf',
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-adieu',
})

export const metadata = {
  title: "TrendWave",
  description: "TreandWave it's cool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${mulish.variable} ${adieu.variable}`}>
        <StoreProvider>
          <div className="page">
            <Header />
            {children}
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
