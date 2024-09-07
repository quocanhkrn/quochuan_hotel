import { Roboto } from "next/font/google";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "QUỐC HUẤN HOTEL | THE BEGINNING OF AMAZING JOURNEYS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
