import type { Metadata } from "next";
import "./globals.css";
import roboto from "@/lib/font";
import SessionWrapper from "./components/sessionWrapper";

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
    <SessionWrapper>
      <html lang="en">
        <body className={`${roboto.className} bg-botw-mobile bg-cover sm:bg-botw-pc bg-fixed bg-no-repeat`}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
