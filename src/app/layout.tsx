import NavBar from "@/components/NavBar";
import Footer from "./(public)/ui/footer";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | e5code online coaching",
    absolute: "e5code online coaching",
  },
  description: 'Welcome to online e5code FullStack coaching center.Explore comprehensive online coaching covering Frontend, Backend, MERN Stack.Dive into Data Structures and Algorithms,and DevOps.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <SessionProvider>
      <div className="h-full grid grid-rows-layout">
          <NavBar />
          <main className="px-4 container mx-auto">{children}</main>
          <Footer />
          </div>
          <Toaster />
          
        </SessionProvider>
     
      </body>
    </html>
  );
}
