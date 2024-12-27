import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderSub from "@/components/HeaderSub";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puterbench | PC Builder & Store",
  description:
    "An e-commerce platform to get your PC parts as well as PC builder with optimized parts combination and specs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderSub />
        {children}
        <Footer />
      </body>
    </html>
  );
}
