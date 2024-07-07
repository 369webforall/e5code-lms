import NavBar from "../components/NavBar";
import Footer from "./(public)/ui/footer";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | e5code online coaching",
    absolute: "e5code online coaching",
  },
  description:
    "Welcome to online e5code FullStack coaching center.Explore comprehensive online coaching covering Frontend, Backend, MERN Stack.Dive into Data Structures and Algorithms,and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="grid h-full grid-rows-layout">
          <NavBar />
          <main className="container mx-auto px-4">{children}</main>
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
