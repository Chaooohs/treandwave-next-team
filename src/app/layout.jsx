import { Montserrat, Mulish } from "next/font/google";
import { Footer, Header } from "@/components/shared";
import StoreProvider from "./StoreProvider";
import MailForm from "@/components/shared/mailForm";
import RunningLine from "@/components/shared/runningLine";
import "./globals.scss";

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

export const metadata = {
  title: "TrendWave",
  description: "TreandWave it's cool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${mulish.variable}`}>
      <body className="font-mont">
        <StoreProvider>
          <div className="page">
            <RunningLine/>
            <Header />
            {children}
            <MailForm />
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
