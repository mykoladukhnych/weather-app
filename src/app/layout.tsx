import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '800', '1000']
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App by Mykola Dukhnych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
