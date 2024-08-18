import { Nunito } from "next/font/google";
import { Footer, Header } from "@/components/shared";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400', '700',]
});

export const metadata = {
  title: "TrendWave",
  description: "TreandWave it's cool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="page">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
