import { Montserrat, Mulish } from "next/font/google";
import { Footer, Header, Provider } from "@/components/shared";
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
  weight: ['200', '400', '700', '800']
})

export const metadata = {
  icons: {
    icon: '/icon.ico',
  },
  title: "TrendWave",
  description: "TreandWave it's cool",
};

export default function RootLayout({ auth, children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${mulish.variable}`}>
      <body className="font-mont">
        <StoreProvider>
          <div className="page">
            <RunningLine />
            <Header />
            {auth}
            {children}
            <MailForm />
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
