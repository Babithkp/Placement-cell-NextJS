import type { Metadata } from "next";
import { Kanit, Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { FormContextProvider } from "@/store/contextForm";
import clsx from "clsx";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Placement cell App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(kanit.className,"bg-[#F6F8FA] ")}>
        <FormContextProvider>
          <Navbar />
          {children}
          <Footer />
        </FormContextProvider>
      </body>
    </html>
  );
}
