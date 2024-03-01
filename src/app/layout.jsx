import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Search Clone",
  description: "A google search clone made using NextJS, Tailwind CSS & google search api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer/>
      </body>
    </html>
  );
}
