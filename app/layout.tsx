import "./globals.css";
import { Oswald, Lobster_Two } from "next/font/google";

export const metadata = {
  title: "S-creations",
  description: "S-creations portfolio",
};

//Define main font
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
      <body className="w-full font-oswald ">{children}</body>
    </html>
  );
}
