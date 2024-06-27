import type { Metadata } from "next";
import "./globals.css";
import roboto from "@/lib/font";

export const metadata: Metadata = {
  title: "WiiList | Collection de jeux wii",
  description: "Jeux wii provenant seulement de l'europe avec la langue française incluse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-pink`}>{children}</body>
    </html>
  );
}
