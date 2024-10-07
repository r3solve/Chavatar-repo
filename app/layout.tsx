
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "./ui/components/SideBar/SideBar";
import { open_sans } from "./ui/components/fonts";
import TopNav from "./utils/ui/top-nav";

import MobileMenu from "./ui/components/mobile-menu/MobileMenu";
import RSidebar from "./ui/components/responsive-sidebar/RSidebar";

export const metadata: Metadata = {
  title: "Chavatar | Talk to your favourite anime characters",
  description: "Bring your favourite anime characters to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${open_sans.className}   antialiased`}
      >
        <div className="w-full h-screen flex flex-row">
          <RSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
