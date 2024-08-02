import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
