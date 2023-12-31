import "./globals.css";
import { Oswald, Lobster_Two, Roboto } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//Define main font
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});
const lobster = Lobster_Two({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${oswald.variable} ${lobster.variable}`} lang="en">
      <body className="max-w-full font-playfair">{children}</body>
    </html>
  );
}
