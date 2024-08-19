import { Montserrat, Mulish } from "next/font/google";
import { Footer, Header } from "@/components/shared";
import localFont from 'next/font/local'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600']
})

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['400']
})

const adieu = localFont({
  src: '../fonts/adieu.otf',
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
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
