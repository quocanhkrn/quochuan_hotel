import { Roboto } from "next/font/google";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

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
